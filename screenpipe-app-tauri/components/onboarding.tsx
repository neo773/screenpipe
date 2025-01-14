import localforage from "localforage";
import React, { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import OnboardingIntro from "@/components/onboarding/introduction";
import OnboardingAPISetup from "@/components/onboarding/api-setup";
import { useOnboarding } from "@/lib/hooks/use-onboarding";
import { useSettings } from "@/lib/hooks/use-settings";
import Permissions from "@/components/onboarding/permissions";


const setFirstTimeUserFlag = async () => {
  await localforage.setItem("isFirstTimeUser", false);
};

type SlideKey = "intro" | "apiSetup" | "permissions";

interface SlideConfig {
  next: (options?: {
    selectedOptions?: string[];
    selectedPreference?: string | null;
    selectedPersonalization?: string | null;
  }) => SlideKey | null;
  prev: (options?: {
    selectedOptions?: string[];
    selectedPreference?: string | null;
    selectedPersonalization?: string | null;
  }) => SlideKey | null;
}

const slideFlow: Record<SlideKey, SlideConfig> = {
  intro: {
    next: () => "apiSetup",
    prev: () => null,
  },
  apiSetup: {
    next: () => "permissions",
    prev: () => "intro",
  },
  permissions: {
    next: () => null,
    prev: () => "apiSetup",
  },
};

const getSlideIndex = (slide: SlideKey): number => {
  const slideOrder: SlideKey[] = ["intro", "apiSetup", "permissions"];
  return slideOrder.indexOf(slide);
};

const Onboarding: React.FC = () => {
  const { toast } = useToast();
  const [currentSlide, setCurrentSlide] = useState<SlideKey>("intro");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedPersonalization, setSelectedPersonalization] = useState<string | null>(null);
  const [selectedPreference, setSelectedPreference] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { showOnboarding, setShowOnboarding } = useOnboarding();
  const { updateSettings } = useSettings();

  useEffect(() => {
    setIsVisible(true);
  }, [currentSlide]);

  useEffect(() => {
    if (showOnboarding) {
      const hideCloseButton = () => {
        const closeButton = document.querySelector(".lucide-x");
        if (closeButton) {
          (closeButton as HTMLElement).classList.add("hidden");
        }
      };
      setTimeout(hideCloseButton, 100);
    }
  }, [showOnboarding]);

  useEffect(() => {
    if (error) {
      toast({
        title: "error",
        description: error,
        variant: "destructive",
      });
    }
  }, [error, toast]);

  const handleNextSlide = () => {
    const nextSlide = slideFlow[currentSlide].next({
      selectedOptions,
      selectedPreference,
      selectedPersonalization,
    });

    if (nextSlide) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide(nextSlide);
        setError(null);
      }, 300);
    } else {
      handleEnd();
    }
  };

  const handlePrevSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      const prevSlide = slideFlow[currentSlide].prev({
        selectedOptions,
        selectedPreference,
        selectedPersonalization,
      });
      if (prevSlide) {
        setError(null);
        setCurrentSlide(prevSlide);
      }
    }, 300);
  };

  const handleDialogClose = (open: boolean) => {
    if (!open && currentSlide) {
      setShowOnboarding(open);
    }
  };

  const handleEnd = async () => {
    setShowOnboarding(false);
    await setFirstTimeUserFlag();
    updateSettings({
      isFirstTimeUser: false,
    });
  };

  const renderCurrentSlide = () => {
    const commonProps = {
      className: `transition-opacity duration-300 ${
        isVisible ? "opacity-100 ease-out" : "opacity-0 ease-in"
      }`,
    };

    switch (currentSlide) {
      case "intro":
        return <OnboardingIntro {...commonProps} handleNextSlide={handleNextSlide} />;
      case "apiSetup":
        return (
          <OnboardingAPISetup
            {...commonProps}
            handleNextSlide={handleNextSlide}
            handlePrevSlide={handlePrevSlide}
          />
        );
      case "permissions":
        return (
          <Permissions
            {...commonProps}
            handleNextSlide={handleNextSlide}
            handlePrevSlide={handlePrevSlide}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={showOnboarding} onOpenChange={handleDialogClose}>
      <DialogContent className="max-w-3xl h-[640px] max-h-[100vh] !rounded-3xl">
        <div className="flex flex-col w-full h-full overflow-hidden">
          {renderCurrentSlide()}
          {currentSlide !== "intro" && (
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-1">
              {Array.from({ length: Object.keys(slideFlow).length }).map((_, i) => (
                <div
                  key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === getSlideIndex(currentSlide)
                    ? "w-6 bg-black"
                    : "w-2 bg-gray-200"
                }`}
              />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Onboarding;

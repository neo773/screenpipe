import React from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import OnboardingNavigation from "./navigation";

interface OnboardingLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  showLogo?: boolean;
  showNavigation?: boolean;
  navigationProps?: {
    isLoading?: boolean;
    handlePrevSlide?: () => void;
    handleNextSlide?: () => void;
    prevBtnText?: string;
    nextBtnText?: string;
  };
}

const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
  children,
  title,
  description,
  showLogo = true,
  showNavigation = true,
  navigationProps,
}) => {
  return (
    <div className="flex h-full flex-col">
      <DialogHeader className="flex flex-col px-2 justify-center items-center">
        {showLogo && (
          <img
            className="w-16 h-16 justify-center"
            src="/128x128.png"
            alt="screenpipe-logo"
          />
        )}
        {title && (
          <DialogTitle className="text-center text-2xl">
            {title}
          </DialogTitle>
        )}
      </DialogHeader>

      <div className="flex-1 flex flex-col gap-4 ">
      <p className="text-muted-foreground text-center mb-4">
          {description}
        </p>
        {children}
      </div>

      {showNavigation && navigationProps && (
        <OnboardingNavigation
          className="mt-8"
          {...navigationProps}
        />
      )}
    </div>
  );
};

export default OnboardingLayout; 
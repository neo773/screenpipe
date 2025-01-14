import React from "react";
import { RainbowButton } from "../ui/rainbow-button";
import { ArrowRight } from "lucide-react";
import OnboardingLayout from "./shared-layout";

interface OnboardingIntroProps {
  className?: string;
  handleNextSlide: () => void;
}

const OnboardingIntro: React.FC<OnboardingIntroProps> = ({
  className = "",
  handleNextSlide,
}) => (
  <OnboardingLayout
    showNavigation={false}
    title="welcome to screenpipe"
    description="welcome to screenpipe, excited to have you here"
  >
    <div className="flex flex-col justify-center items-center">
      <video
        width="600px"
        className="mt-2 rounded-2xl"
        autoPlay
        loop
        preload="true"
      >
        <source src="/onboarding-screenpipe.mp4" type="video/mp4" />
        your browser does not support the video tag.
      </video>

      <RainbowButton className="mt-8 max-w-48" onClick={handleNextSlide}>
        get started
        <ArrowRight className="w-4 h-4 ml-2" />
      </RainbowButton>
    </div>
  </OnboardingLayout>
);

export default OnboardingIntro;

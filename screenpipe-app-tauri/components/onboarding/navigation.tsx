import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface OnboardingNavigationProps {
  className?: string;
  isLoading?: boolean;
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
  prevBtnText?: string;
  nextBtnText?: string;
}

const OnboardingNavigation: React.FC<OnboardingNavigationProps> = ({
  className = "",
  isLoading = false,
  handlePrevSlide,
  handleNextSlide,
  prevBtnText = "back",
  nextBtnText = "next",
}) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <Button
        variant="ghost"
        onClick={handlePrevSlide}
        disabled={isLoading}
        className="text-muted-foreground"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        {prevBtnText}
      </Button>
      <Button onClick={handleNextSlide} disabled={isLoading}>
        {nextBtnText}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

export default OnboardingNavigation;

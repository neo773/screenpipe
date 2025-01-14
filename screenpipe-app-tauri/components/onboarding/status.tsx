{
  /*TODO: setup screenpipe status  <10-10-24, @tribhuwan-kumar>*/
}

import React, { useState } from "react";
import { ArrowUpRight, Check, HelpCircle } from "lucide-react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import OnboardingNavigation from "@/components/onboarding/navigation";
import { Command } from "@tauri-apps/plugin-shell";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";
import { useSettings } from "@/lib/hooks/use-settings";
import { Label } from "../ui/label";
import { trackError } from "@/lib/opentelemetry";
import OnboardingLayout from "./shared-layout";
import { Checkbox } from "../ui/checkbox";

interface OnboardingStatusProps {
  className?: string;
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
}

const OnboardingStatus: React.FC<OnboardingStatusProps> = ({
  className = "",
  handlePrevSlide,
  handleNextSlide,
}) => {
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [useChineseMirror, setUseChineseMirror] = useState(false);
  const { updateSettings } = useSettings();

  const startSetup = async () => {
    setIsLoading(true);
    setStatus(null);

    try {
      const command = Command.sidecar("screenpipe", ["setup"]);

      const timeoutPromise = new Promise(
        (_, reject) =>
          setTimeout(() => reject(new Error("status check timed out")), 900000) // 15 minutes
      );

      const outputPromise = new Promise<string>((resolve, reject) => {
        command.on("close", (data) => {
          if (data.code !== 0) {
            reject(new Error(`command failed with code ${data.code}`));
          }
        });
        command.on("error", (error) => reject(new Error(error)));
        command.stdout.on("data", (line) => {
          console.log(line);
          if (line.includes("screenpipe setup complete")) {
            resolve("ok");
          }
        });
      });

      const child = await command.spawn();

      try {
        const result = await Promise.race([outputPromise, timeoutPromise]);
        setStatus(result as string);
      } catch (error) {
        console.error("error or timeout:", error);
        setStatus("error");
      } finally {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("error checking status:", error);
      setStatus("error");
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    setStatus(null);
    handleNextSlide();
  };

  const handlePrev = () => {
    setStatus(null);
    handlePrevSlide();
  };

  const handleChineseMirrorToggle = async (checked: boolean) => {
    setUseChineseMirror(checked);
    updateSettings({ useChineseMirror: checked });
  };

  const runSetup = async () => {
    setIsLoading(true);
    setStatus(null);

    try {
      const command = Command.sidecar("screenpipe", ["setup"]);

      const timeoutPromise = new Promise(
        (_, reject) =>
          setTimeout(() => reject(new Error("setup timed out")), 900000) // 15 minutes
      );

      const outputPromise = new Promise<string>((resolve, reject) => {
        command.on("close", (data) => {
          if (data.code !== 0) {
            reject(new Error(`command failed with code ${data.code}`));
          }
        });
        command.on("error", (error) => reject(new Error(error)));
        command.stdout.on("data", (line) => {
          console.log(line);
          if (line.includes("screenpipe setup complete")) {
            resolve("ok");
          }
        });
      });

      const child = await command.spawn();

      try {
        const result = await Promise.race([outputPromise, timeoutPromise]);
        setStatus(result as string);
      } catch (error) {
        console.error("error or timeout:", error);
        setStatus("error");
      } finally {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("error checking status:", error);
      setStatus("error");
      setIsLoading(false);
      trackError(error, {
        operation: "screenpipe-setup-failure",
        additionalAttributes: {
          useChineseMirror: String(useChineseMirror),
        },
      });
    }
  };

  return (
    <OnboardingLayout
      title="setting up screenpipe"
      description="we need to download some ai models for you."
      navigationProps={{
        handlePrevSlide: handlePrev,
        handleNextSlide: handleNext,
        prevBtnText: "previous",
        nextBtnText: "next",
      }}
    >
      <div className="flex flex-col items-center w-full max-w-xl mx-auto space-y-8 py-6">
        {/* Status/Action Section */}
        <div className="flex flex-col items-center space-y-4">
          {status === null ? (
            <Button
              onClick={startSetup}
              disabled={isLoading}
              className="min-w-[140px] bg-zinc-900 hover:bg-zinc-800"
            >
              {isLoading ? (
                <svg
                  className="size-4 animate-spin mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : null}
              <span>{isLoading ? "setting up..." : "start setup"}</span>
            </Button>
          ) : status === "ok" ? (
            <div className="flex flex-col items-center space-y-3 text-center flex-1 justify-center min-h-[200px]">
              <div className="size-[60px] bg-green-50 rounded-full flex items-center justify-center">
                <Check className="size-8 text-green-600" />
              </div>
              <p className="text-sm text-zinc-600">
                setup complete ai models downloaded
              </p>
            </div>
          ) : (
            <p className="text-sm text-red-500">{status}</p>
          )}
        </div>

        {/* Chinese Mirror Toggle - Only show if setup is not complete */}
        {status !== "ok" && (
          <div className="flex items-center justify-center space-x-3">
            <Checkbox
              id="chinese-mirror-toggle"
              checked={useChineseMirror}
              onCheckedChange={handleChineseMirrorToggle}
              className="data-[state=checked]:bg-zinc-900 !rounded-[4px]"
            />
            <Label
              htmlFor="chinese-mirror-toggle"
              className="flex items-center space-x-2"
            >
              <span className="text-sm text-zinc-700">
                use chinese mirror for model downloads
              </span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-zinc-400 hover:text-zinc-600 transition-colors" />
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-xs">
                    <p className="text-xs leading-relaxed">
                      enable this option to use a chinese mirror for downloading
                      hugging face models (e.g. whisper, embedded llama, etc.)
                      which are blocked in mainland china.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
          </div>
        )}

        {/* Notice - Updated styling based on status */}
        {status !== "ok" && (
          <div className="px-6 py-4 bg-zinc-50/50 rounded-lg border border-zinc-100 backdrop-blur-sm">
            <p className="text-xs text-zinc-500 text-center leading-relaxed">
              if encountering any issues, you can proceed to the next step and
              it will setup screenpipe when starting the recording process
            </p>
          </div>
        )}
      </div>
    </OnboardingLayout>
  );
};

export default OnboardingStatus;

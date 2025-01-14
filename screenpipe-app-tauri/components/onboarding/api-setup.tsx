import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useSettings } from "@/lib/hooks/use-settings";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, HelpCircle, ArrowUpRight } from "lucide-react";
import { open } from "@tauri-apps/plugin-shell";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import OnboardingLayout from "./shared-layout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormItem } from "../ui/form";

interface OnboardingAPISetupProps {
  className?: string;
  handleNextSlide: () => void;
  handlePrevSlide: () => void;
}

const OnboardingAPISetup: React.FC<OnboardingAPISetupProps> = ({
  className,
  handleNextSlide,
  handlePrevSlide,
}) => {
  const { toast } = useToast();
  const { settings, updateSettings } = useSettings();
  const [localSettings, setLocalSettings] = React.useState(settings);
  const [showApiKey, setShowApiKey] = React.useState(false);
  const [areAllInputsFilled, setAreAllInputsFilled] = React.useState(false);
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const [isValidating, setIsValidating] = React.useState(false);

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalSettings((prev) => ({ ...prev, openaiApiKey: newValue }));
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalSettings((prev) => ({ ...prev, aiModel: newValue }));
  };

  useEffect(() => {
    const { aiUrl, openaiApiKey, aiModel } = localSettings;
    const isApiKeyRequired =
      aiUrl !== "https://ai-proxy.i-f9f.workers.dev/v1" &&
      aiUrl !== "http://localhost:11434/v1";

    setAreAllInputsFilled(
      aiUrl.trim() !== "" &&
        aiModel.trim() !== "" &&
        (!isApiKeyRequired || openaiApiKey.trim() !== "")
    );
  }, [localSettings]);

  const validateInputs = async () => {
    const { aiUrl, openaiApiKey, aiModel } = localSettings;
    const newErrors: { [key: string]: string } = {};
    try {
      const response = await fetch(`${aiUrl}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          model: aiModel,
          messages: [
            {
              role: "user",
              content: "You are a helpful assistant that tells short jokes.",
            },
            {
              role: "user",
              content:
                "Tell me a short joke (1-2 sentences) about screen recording, answer in lower case only.",
            },
          ],
          max_tokens: 60,
          stream: false,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const joke = data.choices[0].message.content.trim();

        console.log("ai is ready!", joke);
        toast({
          title: "ai is ready!",
          description: `here's a joke: ${joke}`,
          duration: 5000,
        });
      } else {
        const errorData = await response.json();
        newErrors.openaiApiKey = `invalid api key or model: ${
          errorData.error?.message.toLowerCase() || "unknown error"
        }`;
      }
    } catch (error: any) {
      newErrors.openaiApiKey = `failed to validate api key: ${error.message.toLowerCase()}`;
    }

    setErrors(newErrors);
    Object.keys(newErrors).forEach((key) => {
      toast({
        title: "api key validation error",
        description: newErrors[key],
        variant: "destructive",
      });
    });
    return Object.keys(newErrors).length === 0;
  };

  const handleValidationMoveNextSlide = async () => {
    setIsValidating(true);
    updateSettings(localSettings);
    const isValid = await validateInputs();
    setIsValidating(false);
    if (isValid) {
      handleNextSlide();
    }
  };

  React.useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  const handleAiUrlChange = (newValue: string) => {
    if (newValue === "custom") {
      setLocalSettings((prev) => ({ ...prev, aiUrl: "" }));
    } else {
      setLocalSettings((prev) => ({ ...prev, aiUrl: newValue }));
    }
  };

  const handleCustomUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalSettings((prev) => ({ ...prev, aiUrl: newValue }));
  };

  const isApiKeyRequired =
    localSettings.aiUrl !== "https://ai-proxy.i-f9f.workers.dev/v1" &&
    localSettings.aiUrl !== "http://localhost:11434/v1";

  const getProviderTooltipContent = () => {
    switch (localSettings.aiUrl) {
      case "https://ai-proxy.i-f9f.workers.dev/v1":
        return (
          <p>
            screenpipe cloud doesn&apos;t require an API key.
            <br />
            we offer free credits.
            <br />
            note: using this option may involve sending data to our servers.
            <br />
            please review our data privacy policy for more information at:
            <br />
            <a
              href="https://screenpi.pe/privacy"
              target="_blank"
              className="text-primary hover:underline"
            >
              screenpipe privacy policy
            </a>
          </p>
        );
      case "https://api.openai.com/v1":
        return (
          <p>
            openai requires an API key.
            <br />
            note: using this option may involve sending data to openai servers.
            <br />
            please review openai&apos;s data privacy policy for more
            information.
            <br />
            find openai key here:{" "}
            <a
              href="https://platform.openai.com/account/api-keys"
              target="_blank"
              className="text-primary hover:underline"
            >
              openai
            </a>
          </p>
        );
      case "http://localhost:11434/v1":
        return (
          <p>
            choose your ai provider. for local providers like ollama, make sure
            it&apos;s running on your machine.
            <br />
            note: on windows, you may need to run ollama with:
            <pre className="bg-gray-100 p-1 rounded-md">
              OLLAMA_ORIGINS=* ollama run llama3.2:3b-instruct-q4_K_M
            </pre>
          </p>
        );
      default:
        return (
          <p>
            choose your ai provider. for local providers like ollama, make sure
            it&apos;s running on your machine.
            <br />
            note: on windows, you may need to run ollama with:
            <pre className="bg-gray-100 p-1 rounded-md">
              OLLAMA_ORIGINS=* ollama run llama3.2:3b-instruct-q4_K_M
            </pre>
          </p>
        );
    }
  };

  const getModelTooltipContent = () => {
    switch (localSettings.aiUrl) {
      case "https://api.openai.com/v1":
      case "https://ai-proxy.i-f9f.workers.dev/v1":
        return (
          <p>
            suggested models:
            <br />- gpt-4o
          </p>
        );
      case "http://localhost:11434/v1":
        return (
          <p>
            suggested models:
            <br />
            - llama3.2:3b-instruct-q4_K_M
            <br />
            - mistral models
            <br />
            or find more models at:
            <a
              href="https://ollama.com/library"
              target="_blank"
              className="text-primary hover:underline"
            >
              ollama models
            </a>
          </p>
        );
      default:
        return (
          <p>enter the model name appropriate for your custom AI provider.</p>
        );
    }
  };

  const isCustomUrl = ![
    "https://api.openai.com/v1",
    "http://localhost:11434/v1",
    "https://ai-proxy.i-f9f.workers.dev/v1",
  ].includes(localSettings.aiUrl);

  const getSelectValue = () => {
    if (isCustomUrl) return "custom";
    return localSettings.aiUrl;
  };

  return (
    <OnboardingLayout
      title="setup your ai settings"
      description="setup your ai provider and model"
      navigationProps={{
        isLoading: isValidating,
        handlePrevSlide,
        handleNextSlide: areAllInputsFilled
          ? handleValidationMoveNextSlide
          : () => {
              updateSettings(localSettings);
              handleNextSlide();
            },
        prevBtnText: "previous",
        nextBtnText: areAllInputsFilled ? "setup" : "i'll setup later",
      }}
    >
      <form className="flex flex-col gap-4 justify-center px-48">
        <FormItem>
          <Label>ai provider</Label>
          <div className="flex items-center gap-2">
            <Select onValueChange={handleAiUrlChange} value={getSelectValue()}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select AI provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="https://api.openai.com/v1">
                  openai
                </SelectItem>
                <SelectItem value="http://localhost:11434/v1">
                  ollama (local)
                </SelectItem>
                <SelectItem value="https://ai-proxy.i-f9f.workers.dev/v1">
                  screenpipe cloud
                </SelectItem>
                <SelectItem value="custom">custom</SelectItem>
              </SelectContent>
            </Select>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="h-4 w-4 cursor-default" />
                </TooltipTrigger>
                <TooltipContent side="left">
                  {getProviderTooltipContent()}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </FormItem>

        {isCustomUrl && (
          <FormItem>
            <Label>custom url</Label>
            <Input
              id="customAiUrl"
              value={localSettings.aiUrl}
              onChange={handleCustomUrlChange}
              className="w-full"
              placeholder="enter custom ai url"
              autoCorrect="off"
              autoCapitalize="off"
              autoComplete="off"
              type="text"
            />
          </FormItem>
        )}

        {isApiKeyRequired && (
          <FormItem>
            <Label>api key</Label>
            <div className="relative">
              <Input
                id="aiApiKey"
                type={showApiKey ? "text" : "password"}
                value={localSettings.openaiApiKey}
                onChange={handleApiKeyChange}
                className="pr-10"
                placeholder="enter your ai api key"
                autoCorrect="off"
                autoCapitalize="off"
                autoComplete="off"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                {showApiKey ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </FormItem>
        )}

        <FormItem>
          <Label>ai model</Label>
          <div className="flex items-center gap-2">
            <Input
              id="aiModel"
              value={localSettings.aiModel}
              onChange={handleModelChange}
              className="w-full"
              placeholder={
                localSettings.aiUrl === "http://localhost:11434/v1"
                  ? "e.g., llama3.2:3b-instruct-q4_K_M"
                  : "e.g., gpt-4o"
              }
              autoCorrect="off"
              autoCapitalize="off"
              autoComplete="off"
            />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="h-4 w-4 cursor-default" />
                </TooltipTrigger>
                <TooltipContent side="right">
                  {getModelTooltipContent()}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </FormItem>
      </form>

      <a
        onClick={() =>
          open("https://github.com/ollama/ollama?tab=readme-ov-file#ollama")
        }
        href="#"
        className="mt-4 text-muted-foreground text-sm mr-auto ml-auto !text-center hover:underline"
      >
        don&apos;t have api key ? set up ollama locally
        <ArrowUpRight className="inline w-4 h-4 ml-1 " />
      </a>
    </OnboardingLayout>
  );
};

export default OnboardingAPISetup;

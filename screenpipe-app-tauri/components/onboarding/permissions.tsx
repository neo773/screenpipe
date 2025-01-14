import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Mic, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import OnboardingLayout from "./shared-layout";

interface PermissionsProps {
  handleNextSlide: () => void;
  handlePrevSlide: () => void;
  className?: string;
}

type PermissionsStatus = {
  screenRecording: string;
  microphone: string;
  accessibility: string;
};

export default function Permissions({
  handleNextSlide,
  handlePrevSlide,
  className,
}: PermissionsProps) {
  const [permissions, setPermissions] = useState<PermissionsStatus>({
    screenRecording: "NotDetermined",
    microphone: "NotDetermined",
    accessibility: "NotDetermined",
  });

  useEffect(() => {
    checkInitialPermissions();
  }, []);

  const checkInitialPermissions = async () => {
    try {
      const perms = await invoke<PermissionsStatus>("do_permissions_check", {
        initialCheck: true,
      });
      console.log("perms", perms);
      setPermissions(perms);
    } catch (error) {
      console.error("Failed to check permissions:", error);
    }
  };

  const handlePermissionRequest = async (type: "screen" | "audio") => {
    try {
      const permissionType =
        type === "screen" ? "screenRecording" : "microphone";

      await invoke("request_permission", {
        permission: permissionType,
      });

      const perms = await invoke<PermissionsStatus>("do_permissions_check", {
        initialCheck: false,
      });

      setPermissions(perms);
    } catch (error) {
      console.error(`Failed to request ${type} permission:`, error);
    }
  };

  const isAllGranted =
    permissions.screenRecording === "granted" &&
    permissions.microphone === "granted";

  return (
    <OnboardingLayout
      title="grant permissions"
      description="screenpipe needs access to your screen and microphone to work its magic"
      navigationProps={{
        handlePrevSlide,
        handleNextSlide,
        prevBtnText: "previous",
        nextBtnText: isAllGranted ? "next" : "skip for now",
      }}
    >
      <Card className="flex justify-between items-start p-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <Monitor className="w-6 h-6" />
            <h3 className="font-medium">screen recording</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            record your screen to capture context for AI assistance
          </p>
        </div>
        <Button
          className="w-32"
          onClick={() => handlePermissionRequest("screen")}
          disabled={permissions.screenRecording === "granted"}
        >
          {permissions.screenRecording === "granted"
            ? "granted"
            : "grant access"}
        </Button>
      </Card>

      <Card className="flex justify-between items-start p-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <Mic className="w-6 h-6" />
            <h3 className="font-medium">microphone</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            capture audio for enhanced context and voice commands
          </p>
        </div>
        <Button
          className="w-32"
          onClick={() => handlePermissionRequest("audio")}
          disabled={permissions.microphone === "granted"}
        >
          {permissions.microphone === "granted" ? "granted" : "grant access"}
        </Button>
      </Card>
    </OnboardingLayout>
  );
}

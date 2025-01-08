// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface HealthCheckResponse {
  audio_status: string;

  frame_status: string;

  last_audio_timestamp: string | null;

  last_frame_timestamp: string | null;

  last_ui_timestamp: string | null;

  message: string;

  status: string;

  ui_status: string;

  verbose_instructions: string | null;
}

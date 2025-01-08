// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Health extends APIResource {
  retrieve(options?: Core.RequestOptions): Core.APIPromise<HealthRetrieveResponse> {
    return this._client.get('/health', options);
  }
}

export interface HealthRetrieveResponse {
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

export declare namespace Health {
  export { type HealthRetrieveResponse as HealthRetrieveResponse };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Add extends APIResource {
  execute(body: AddExecuteParams, options?: Core.RequestOptions): Core.APIPromise<AddExecuteResponse> {
    return this._client.post('/add', { body, ...options });
  }
}

export interface AddExecuteResponse {
  message: string | null;

  success: boolean;
}

export interface AddExecuteParams {
  content: AddExecuteParams.Content;

  device_name: string;
}

export namespace AddExecuteParams {
  export interface Content {
    content_type: string;

    data: Array<Content.UnionMember0> | Content.UnionMember1;
  }

  export namespace Content {
    export interface UnionMember0 {
      app_name: string | null;

      file_path: string;

      ocr_results: Array<UnionMember0.OcrResult> | null;

      tags: Array<string> | null;

      timestamp: string | null;

      window_name: string | null;
    }

    export namespace UnionMember0 {
      export interface OcrResult {
        focused: boolean | null;

        ocr_engine: string | null;

        text: string;

        text_json: string | null;
      }
    }

    export interface UnionMember1 {
      transcription: string;

      transcription_engine: string;
    }
  }
}

export declare namespace Add {
  export { type AddExecuteResponse as AddExecuteResponse, type AddExecuteParams as AddExecuteParams };
}

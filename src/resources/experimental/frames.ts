// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Frames extends APIResource {
  merge(body: FrameMergeParams, options?: Core.RequestOptions): Core.APIPromise<FrameMergeResponse> {
    return this._client.post('/experimental/frames/merge', { body, ...options });
  }
}

export interface FrameMergeResponse {
  video_path: string;
}

export interface FrameMergeParams {
  video_paths: Array<string>;
}

export declare namespace Frames {
  export { type FrameMergeResponse as FrameMergeResponse, type FrameMergeParams as FrameMergeParams };
}

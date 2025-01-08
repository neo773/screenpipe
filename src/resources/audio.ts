// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Audio extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<AudioListResponse> {
    return this._client.get('/audio/list', options);
  }
}

export type AudioListResponse = Array<AudioListResponse.AudioListResponseItem>;

export namespace AudioListResponse {
  export interface AudioListResponseItem {
    is_default: boolean;

    name: string;
  }
}

export declare namespace Audio {
  export { type AudioListResponse as AudioListResponse };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SpeakersAPI from './speakers';

export class Unnamed extends APIResource {
  list(query?: UnnamedListParams, options?: Core.RequestOptions): Core.APIPromise<UnnamedListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<UnnamedListResponse>;
  list(
    query: UnnamedListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UnnamedListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/speakers/unnamed', { query, ...options });
  }
}

export type UnnamedListResponse = Array<SpeakersAPI.Speaker>;

export interface UnnamedListParams {
  limit?: number;

  offset?: number;

  speaker_ids?: Array<number> | null;
}

export declare namespace Unnamed {
  export { type UnnamedListResponse as UnnamedListResponse, type UnnamedListParams as UnnamedListParams };
}

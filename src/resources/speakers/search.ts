// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SpeakersAPI from './speakers';

export class Search extends APIResource {
  list(query?: SearchListParams, options?: Core.RequestOptions): Core.APIPromise<SearchListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SearchListResponse>;
  list(
    query: SearchListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/speakers/search', { query, ...options });
  }
}

export type SearchListResponse = Array<SpeakersAPI.Speaker>;

export interface SearchListParams {
  name?: string | null;
}

export declare namespace Search {
  export { type SearchListResponse as SearchListResponse, type SearchListParams as SearchListParams };
}

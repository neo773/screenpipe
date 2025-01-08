// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SearchAPI from './search';
import { Search, SearchListParams, SearchListResponse } from './search';
import * as UnnamedAPI from './unnamed';
import { Unnamed, UnnamedListParams, UnnamedListResponse } from './unnamed';

export class Speakers extends APIResource {
  unnamed: UnnamedAPI.Unnamed = new UnnamedAPI.Unnamed(this._client);
  search: SearchAPI.Search = new SearchAPI.Search(this._client);

  update(body: SpeakerUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Speaker> {
    return this._client.post('/speakers/update', { body, ...options });
  }

  delete(body: SpeakerDeleteParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/speakers/delete', { body, ...options });
  }

  hallucination(body: SpeakerHallucinationParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/speakers/hallucination', { body, ...options });
  }

  merge(body: SpeakerMergeParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/speakers/merge', { body, ...options });
  }

  similar(
    query?: SpeakerSimilarParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeakerSimilarResponse>;
  similar(options?: Core.RequestOptions): Core.APIPromise<SpeakerSimilarResponse>;
  similar(
    query: SpeakerSimilarParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpeakerSimilarResponse> {
    if (isRequestOptions(query)) {
      return this.similar({}, query);
    }
    return this._client.get('/speakers/similar', { query, ...options });
  }
}

export interface Speaker {
  id: number;

  metadata: string;

  name: string;
}

export type SpeakerDeleteResponse = unknown;

export type SpeakerHallucinationResponse = unknown;

export type SpeakerMergeResponse = unknown;

export type SpeakerSimilarResponse = Array<Speaker>;

export interface SpeakerUpdateParams {
  id: number;

  metadata: string | null;

  name: string | null;
}

export interface SpeakerDeleteParams {
  id: number;
}

export interface SpeakerHallucinationParams {
  speaker_id: number;
}

export interface SpeakerMergeParams {
  speaker_to_keep_id: number;

  speaker_to_merge_id: number;
}

export interface SpeakerSimilarParams {
  limit?: number;

  speaker_id?: number;
}

Speakers.Unnamed = Unnamed;
Speakers.Search = Search;

export declare namespace Speakers {
  export {
    type Speaker as Speaker,
    type SpeakerDeleteResponse as SpeakerDeleteResponse,
    type SpeakerHallucinationResponse as SpeakerHallucinationResponse,
    type SpeakerMergeResponse as SpeakerMergeResponse,
    type SpeakerSimilarResponse as SpeakerSimilarResponse,
    type SpeakerUpdateParams as SpeakerUpdateParams,
    type SpeakerDeleteParams as SpeakerDeleteParams,
    type SpeakerHallucinationParams as SpeakerHallucinationParams,
    type SpeakerMergeParams as SpeakerMergeParams,
    type SpeakerSimilarParams as SpeakerSimilarParams,
  };

  export {
    Unnamed as Unnamed,
    type UnnamedListResponse as UnnamedListResponse,
    type UnnamedListParams as UnnamedListParams,
  };

  export {
    Search as Search,
    type SearchListResponse as SearchListResponse,
    type SearchListParams as SearchListParams,
  };
}

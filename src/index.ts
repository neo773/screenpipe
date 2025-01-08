// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Add, AddExecuteParams, AddExecuteResponse } from './resources/add';
import { Audio, AudioListResponse } from './resources/audio';
import { Health, HealthRetrieveResponse } from './resources/health';
import { Healthcheck, HealthcheckRetrieveResponse } from './resources/healthcheck';
import { RawSql, RawSqlExecuteParams, RawSqlExecuteResponse } from './resources/raw-sql';
import { TagDeleteParams, TagDeleteResponse, Tags } from './resources/tags';
import { Experimental } from './resources/experimental/experimental';
import {
  PipeDeleteParams,
  PipeDeleteResponse,
  PipeDisableParams,
  PipeDisableResponse,
  PipeDownloadParams,
  PipeDownloadResponse,
  PipeEnableParams,
  PipeEnableResponse,
  PipeListResponse,
  PipeUpdateParams,
  PipeUpdateResponse,
  Pipes,
} from './resources/pipes/pipes';
import {
  Speaker,
  SpeakerDeleteParams,
  SpeakerDeleteResponse,
  SpeakerHallucinationParams,
  SpeakerHallucinationResponse,
  SpeakerMergeParams,
  SpeakerMergeResponse,
  SpeakerSearchParams,
  SpeakerSearchResponse,
  SpeakerSimilarParams,
  SpeakerSimilarResponse,
  SpeakerUpdateParams,
  Speakers,
} from './resources/speakers/speakers';
import { Vision } from './resources/vision/vision';

export interface ClientOptions {
  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['NEP773_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Nep773 API.
 */
export class Nep773 extends Core.APIClient {
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Nep773 API.
   *
   * @param {string} [opts.baseURL=process.env['NEP773_BASE_URL'] ?? https://localhost:8080/test-api] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = Core.readEnv('NEP773_BASE_URL'), ...opts }: ClientOptions = {}) {
    const options: ClientOptions = {
      ...opts,
      baseURL: baseURL || `https://localhost:8080/test-api`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;
  }

  healthcheck: API.Healthcheck = new API.Healthcheck(this);
  audio: API.Audio = new API.Audio(this);
  vision: API.Vision = new API.Vision(this);
  tags: API.Tags = new API.Tags(this);
  pipes: API.Pipes = new API.Pipes(this);
  health: API.Health = new API.Health(this);
  rawSql: API.RawSql = new API.RawSql(this);
  add: API.Add = new API.Add(this);
  speakers: API.Speakers = new API.Speakers(this);
  experimental: API.Experimental = new API.Experimental(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Nep773 = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static Nep773Error = Errors.Nep773Error;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Nep773.Healthcheck = Healthcheck;
Nep773.Audio = Audio;
Nep773.Vision = Vision;
Nep773.Tags = Tags;
Nep773.Pipes = Pipes;
Nep773.Health = Health;
Nep773.RawSql = RawSql;
Nep773.Add = Add;
Nep773.Speakers = Speakers;
Nep773.Experimental = Experimental;
export declare namespace Nep773 {
  export type RequestOptions = Core.RequestOptions;

  export { Healthcheck as Healthcheck, type HealthcheckRetrieveResponse as HealthcheckRetrieveResponse };

  export { Audio as Audio, type AudioListResponse as AudioListResponse };

  export { Vision as Vision };

  export {
    Tags as Tags,
    type TagDeleteResponse as TagDeleteResponse,
    type TagDeleteParams as TagDeleteParams,
  };

  export {
    Pipes as Pipes,
    type PipeUpdateResponse as PipeUpdateResponse,
    type PipeListResponse as PipeListResponse,
    type PipeDeleteResponse as PipeDeleteResponse,
    type PipeDisableResponse as PipeDisableResponse,
    type PipeDownloadResponse as PipeDownloadResponse,
    type PipeEnableResponse as PipeEnableResponse,
    type PipeUpdateParams as PipeUpdateParams,
    type PipeDeleteParams as PipeDeleteParams,
    type PipeDisableParams as PipeDisableParams,
    type PipeDownloadParams as PipeDownloadParams,
    type PipeEnableParams as PipeEnableParams,
  };

  export { Health as Health, type HealthRetrieveResponse as HealthRetrieveResponse };

  export {
    RawSql as RawSql,
    type RawSqlExecuteResponse as RawSqlExecuteResponse,
    type RawSqlExecuteParams as RawSqlExecuteParams,
  };

  export {
    Add as Add,
    type AddExecuteResponse as AddExecuteResponse,
    type AddExecuteParams as AddExecuteParams,
  };

  export {
    Speakers as Speakers,
    type Speaker as Speaker,
    type SpeakerDeleteResponse as SpeakerDeleteResponse,
    type SpeakerHallucinationResponse as SpeakerHallucinationResponse,
    type SpeakerMergeResponse as SpeakerMergeResponse,
    type SpeakerSearchResponse as SpeakerSearchResponse,
    type SpeakerSimilarResponse as SpeakerSimilarResponse,
    type SpeakerUpdateParams as SpeakerUpdateParams,
    type SpeakerDeleteParams as SpeakerDeleteParams,
    type SpeakerHallucinationParams as SpeakerHallucinationParams,
    type SpeakerMergeParams as SpeakerMergeParams,
    type SpeakerSearchParams as SpeakerSearchParams,
    type SpeakerSimilarParams as SpeakerSimilarParams,
  };

  export { Experimental as Experimental };
}

export { toFile, fileFromPath } from './uploads';
export {
  Nep773Error,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Nep773;

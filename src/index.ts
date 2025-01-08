// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Add, AddContentResponse, AddCreateParams } from './resources/add';
import { Audio, AudioListResponse } from './resources/audio';
import { Health } from './resources/health';
import { Healthcheck } from './resources/healthcheck';
import { RawSql, RawSqlCreateParams, RawSqlCreateResponse } from './resources/raw-sql';
import { TagDeleteParams, TagDeleteResponse, Tags } from './resources/tags';
import { MonitorInfo, Vision, VisionListResponse } from './resources/vision';
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
  SpeakerSimilarParams,
  SpeakerSimilarResponse,
  SpeakerUpdateParams,
  Speakers,
} from './resources/speakers/speakers';

export interface ClientOptions {
  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['TEST_SC_BASE_URL'].
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
 * API Client for interfacing with the Test Sc API.
 */
export class TestSc extends Core.APIClient {
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Test Sc API.
   *
   * @param {string} [opts.baseURL=process.env['TEST_SC_BASE_URL'] ?? https://localhost:8080/test-api] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = Core.readEnv('TEST_SC_BASE_URL'), ...opts }: ClientOptions = {}) {
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

  static TestSc = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static TestScError = Errors.TestScError;
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

TestSc.Healthcheck = Healthcheck;
TestSc.Audio = Audio;
TestSc.Vision = Vision;
TestSc.Tags = Tags;
TestSc.Pipes = Pipes;
TestSc.Health = Health;
TestSc.RawSql = RawSql;
TestSc.Add = Add;
TestSc.Speakers = Speakers;
TestSc.Experimental = Experimental;
export declare namespace TestSc {
  export type RequestOptions = Core.RequestOptions;

  export { Healthcheck as Healthcheck };

  export { Audio as Audio, type AudioListResponse as AudioListResponse };

  export { Vision as Vision, type MonitorInfo as MonitorInfo, type VisionListResponse as VisionListResponse };

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

  export { Health as Health };

  export {
    RawSql as RawSql,
    type RawSqlCreateResponse as RawSqlCreateResponse,
    type RawSqlCreateParams as RawSqlCreateParams,
  };

  export {
    Add as Add,
    type AddContentResponse as AddContentResponse,
    type AddCreateParams as AddCreateParams,
  };

  export {
    Speakers as Speakers,
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

  export { Experimental as Experimental };

  export type HealthCheckResponse = API.HealthCheckResponse;
}

export { toFile, fileFromPath } from './uploads';
export {
  TestScError,
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

export default TestSc;

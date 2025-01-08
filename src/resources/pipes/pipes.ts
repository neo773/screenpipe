// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as InfoAPI from './info';
import { Info, InfoRetrieveResponse } from './info';

export class Pipes extends APIResource {
  info: InfoAPI.Info = new InfoAPI.Info(this._client);

  update(body: PipeUpdateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/pipes/update', { body, ...options });
  }

  list(options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get('/pipes/list', options);
  }

  delete(body: PipeDeleteParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/pipes/delete', { body, ...options });
  }

  disable(body: PipeDisableParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/pipes/disable', { body, ...options });
  }

  download(body: PipeDownloadParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/pipes/download', { body, ...options });
  }

  enable(body: PipeEnableParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/pipes/enable', { body, ...options });
  }
}

export type PipeUpdateResponse = unknown;

export type PipeListResponse = unknown;

export type PipeDeleteResponse = unknown;

export type PipeDisableResponse = unknown;

export type PipeDownloadResponse = unknown;

export type PipeEnableResponse = unknown;

export interface PipeUpdateParams {
  config: unknown;

  pipe_id: string;
}

export interface PipeDeleteParams {
  pipe_id: string;
}

export interface PipeDisableParams {
  pipe_id: string;
}

export interface PipeDownloadParams {
  url: string;
}

export interface PipeEnableParams {
  pipe_id: string;
}

Pipes.Info = Info;

export declare namespace Pipes {
  export {
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

  export { Info as Info, type InfoRetrieveResponse as InfoRetrieveResponse };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Media extends APIResource {
  validate(query?: MediaValidateParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  validate(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  validate(
    query: MediaValidateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.validate({}, query);
    }
    return this._client.get('/experimental/validate/media', { query, ...options });
  }
}

export type MediaValidateResponse = unknown;

export interface MediaValidateParams {
  file_path?: string;
}

export declare namespace Media {
  export {
    type MediaValidateResponse as MediaValidateResponse,
    type MediaValidateParams as MediaValidateParams,
  };
}

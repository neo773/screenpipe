// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Tags extends APIResource {
  delete(
    contentType: string,
    id: number,
    body: TagDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TagDeleteResponse> {
    return this._client.delete(`/tags/${contentType}/${id}`, { body, ...options });
  }
}

export interface TagDeleteResponse {
  success: boolean;
}

export interface TagDeleteParams {
  tags: Array<string>;
}

export declare namespace Tags {
  export { type TagDeleteResponse as TagDeleteResponse, type TagDeleteParams as TagDeleteParams };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Info extends APIResource {
  retrieve(pipeId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get(`/pipes/info/${pipeId}`, options);
  }
}

export type InfoRetrieveResponse = unknown;

export declare namespace Info {
  export { type InfoRetrieveResponse as InfoRetrieveResponse };
}

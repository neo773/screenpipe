// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class RawSql extends APIResource {
  create(body: RawSqlCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/raw_sql', { body, ...options });
  }
}

export type RawSqlCreateResponse = unknown;

export interface RawSqlCreateParams {
  query: string;
}

export declare namespace RawSql {
  export { type RawSqlCreateResponse as RawSqlCreateResponse, type RawSqlCreateParams as RawSqlCreateParams };
}

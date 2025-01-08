// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class RawSql extends APIResource {
  execute(body: RawSqlExecuteParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/raw_sql', { body, ...options });
  }
}

export type RawSqlExecuteResponse = unknown;

export interface RawSqlExecuteParams {
  query: string;
}

export declare namespace RawSql {
  export {
    type RawSqlExecuteResponse as RawSqlExecuteResponse,
    type RawSqlExecuteParams as RawSqlExecuteParams,
  };
}

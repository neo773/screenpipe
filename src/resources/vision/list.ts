// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class List extends APIResource {
  create(options?: Core.RequestOptions): Core.APIPromise<ListCreateResponse> {
    return this._client.post('/vision/list', options);
  }
}

export interface MonitorInfo {
  id: number;

  height: number;

  is_default: boolean;

  name: string;

  width: number;
}

export type ListCreateResponse = Array<MonitorInfo>;

export declare namespace List {
  export { type MonitorInfo as MonitorInfo, type ListCreateResponse as ListCreateResponse };
}

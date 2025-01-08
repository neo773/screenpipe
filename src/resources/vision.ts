// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Vision extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<VisionListResponse> {
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

export type VisionListResponse = Array<MonitorInfo>;

export declare namespace Vision {
  export { type MonitorInfo as MonitorInfo, type VisionListResponse as VisionListResponse };
}

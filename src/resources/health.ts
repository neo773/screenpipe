// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Health extends APIResource {
  retrieve(options?: Core.RequestOptions): Core.APIPromise<Shared.HealthCheckResponse> {
    return this._client.get('/health', options);
  }
}

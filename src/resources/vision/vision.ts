// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ListAPI from './list';
import { List, ListCreateResponse, MonitorInfo } from './list';

export class Vision extends APIResource {
  list: ListAPI.List = new ListAPI.List(this._client);
}

Vision.List = List;

export declare namespace Vision {
  export { List as List, type MonitorInfo as MonitorInfo, type ListCreateResponse as ListCreateResponse };
}

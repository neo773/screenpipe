// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as FramesAPI from './frames';
import { FrameMergeParams, FrameMergeResponse, Frames } from './frames';
import * as MediaAPI from './media';
import { Media, MediaValidateParams, MediaValidateResponse } from './media';

export class Experimental extends APIResource {
  frames: FramesAPI.Frames = new FramesAPI.Frames(this._client);
  media: MediaAPI.Media = new MediaAPI.Media(this._client);
}

Experimental.Frames = Frames;
Experimental.Media = Media;

export declare namespace Experimental {
  export {
    Frames as Frames,
    type FrameMergeResponse as FrameMergeResponse,
    type FrameMergeParams as FrameMergeParams,
  };

  export {
    Media as Media,
    type MediaValidateResponse as MediaValidateResponse,
    type MediaValidateParams as MediaValidateParams,
  };
}

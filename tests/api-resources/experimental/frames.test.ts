// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Neo773 from 'test-sc-openapi';
import { Response } from 'node-fetch';

const client = new Neo773({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource frames', () => {
  test('merge: only required params', async () => {
    const responsePromise = client.experimental.frames.merge({ video_paths: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('merge: required and optional params', async () => {
    const response = await client.experimental.frames.merge({ video_paths: ['string'] });
  });
});

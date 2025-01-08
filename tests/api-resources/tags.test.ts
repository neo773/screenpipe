// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestSc from 'test-sc';
import { Response } from 'node-fetch';

const client = new TestSc({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource tags', () => {
  test('delete: only required params', async () => {
    const responsePromise = client.tags.delete('content_type', 0, { tags: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.tags.delete('content_type', 0, { tags: ['string'] });
  });
});

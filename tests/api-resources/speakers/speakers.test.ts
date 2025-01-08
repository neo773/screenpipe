// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestSc from 'test-sc';
import { Response } from 'node-fetch';

const client = new TestSc({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource speakers', () => {
  test('update: only required params', async () => {
    const responsePromise = client.speakers.update({ id: 0, metadata: 'metadata', name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.speakers.update({ id: 0, metadata: 'metadata', name: 'name' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.speakers.delete({ id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.speakers.delete({ id: 0 });
  });

  test('hallucination: only required params', async () => {
    const responsePromise = client.speakers.hallucination({ speaker_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('hallucination: required and optional params', async () => {
    const response = await client.speakers.hallucination({ speaker_id: 0 });
  });

  test('merge: only required params', async () => {
    const responsePromise = client.speakers.merge({ speaker_to_keep_id: 0, speaker_to_merge_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('merge: required and optional params', async () => {
    const response = await client.speakers.merge({ speaker_to_keep_id: 0, speaker_to_merge_id: 0 });
  });

  test('similar', async () => {
    const responsePromise = client.speakers.similar();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('similar: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.speakers.similar({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TestSc.NotFoundError,
    );
  });

  test('similar: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.speakers.similar({ limit: 0, speaker_id: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TestSc.NotFoundError);
  });
});

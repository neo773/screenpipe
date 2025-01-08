// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestSc from 'test-sc-api';
import { Response } from 'node-fetch';

const client = new TestSc({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource pipes', () => {
  test('update: only required params', async () => {
    const responsePromise = client.pipes.update({ config: {}, pipe_id: 'pipe_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.pipes.update({ config: {}, pipe_id: 'pipe_id' });
  });

  test('list', async () => {
    const responsePromise = client.pipes.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.pipes.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TestSc.NotFoundError,
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.pipes.delete({ pipe_id: 'pipe_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.pipes.delete({ pipe_id: 'pipe_id' });
  });

  test('disable: only required params', async () => {
    const responsePromise = client.pipes.disable({ pipe_id: 'pipe_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('disable: required and optional params', async () => {
    const response = await client.pipes.disable({ pipe_id: 'pipe_id' });
  });

  test('download: only required params', async () => {
    const responsePromise = client.pipes.download({ url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('download: required and optional params', async () => {
    const response = await client.pipes.download({ url: 'url' });
  });

  test('enable: only required params', async () => {
    const responsePromise = client.pipes.enable({ pipe_id: 'pipe_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enable: required and optional params', async () => {
    const response = await client.pipes.enable({ pipe_id: 'pipe_id' });
  });
});

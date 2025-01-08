// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nep773 from 'nep773';
import { Response } from 'node-fetch';

const client = new Nep773({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource media', () => {
  test('validate', async () => {
    const responsePromise = client.experimental.media.validate();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('validate: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.experimental.media.validate({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Nep773.NotFoundError,
    );
  });

  test('validate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.experimental.media.validate({ file_path: 'file_path' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Nep773.NotFoundError);
  });
});

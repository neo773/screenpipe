// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nep773 from 'nep773';
import { Response } from 'node-fetch';

const client = new Nep773({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource rawSql', () => {
  test('execute: only required params', async () => {
    const responsePromise = client.rawSql.execute({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('execute: required and optional params', async () => {
    const response = await client.rawSql.execute({ query: 'query' });
  });
});

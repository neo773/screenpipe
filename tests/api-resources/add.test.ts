// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nep773 from 'test-sc-openapi';
import { Response } from 'node-fetch';

const client = new Nep773({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource add', () => {
  test('execute: only required params', async () => {
    const responsePromise = client.add.execute({
      content: {
        content_type: 'content_type',
        data: [
          {
            app_name: 'app_name',
            file_path: 'file_path',
            ocr_results: [{ focused: true, ocr_engine: 'ocr_engine', text: 'text', text_json: 'text_json' }],
            tags: ['string'],
            timestamp: '2019-12-27T18:11:19.117Z',
            window_name: 'window_name',
          },
        ],
      },
      device_name: 'device_name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('execute: required and optional params', async () => {
    const response = await client.add.execute({
      content: {
        content_type: 'content_type',
        data: [
          {
            app_name: 'app_name',
            file_path: 'file_path',
            ocr_results: [{ focused: true, ocr_engine: 'ocr_engine', text: 'text', text_json: 'text_json' }],
            tags: ['string'],
            timestamp: '2019-12-27T18:11:19.117Z',
            window_name: 'window_name',
          },
        ],
      },
      device_name: 'device_name',
    });
  });
});

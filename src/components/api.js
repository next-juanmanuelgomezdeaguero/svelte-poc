import { host, version } from './config.js';
import { getApiKey } from './apiKey.js';

const base = `${host}/v${version}`;

export const get = async (endpoint, params = {}, headers = {}) => {
  let apiKey = getApiKey();

  const url = `${base}/${endpoint}`;
  let requestHeaders = new Headers(headers);
  requestHeaders.append('X-CoinAPI-Key', apiKey);
  let init = {
    method: 'GET',
    headers: requestHeaders
  };

  const response = await fetch(url, init);
  const json = await response.json();

  if (!response.ok) {
    _handleError(response, json);
  }

  return json;
};

const _handleError = (response, json) => {
  //response.status
  throw new Error(json.error);
};

const SESSION_KEY = 'CoinApiKey';

export const getApiKey = () => {
  return window.sessionStorage.getItem(SESSION_KEY);
};

export const setApiKey = apiKey => {
  return window.sessionStorage.setItem(SESSION_KEY, apiKey);
};
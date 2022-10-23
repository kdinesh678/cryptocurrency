import {COIN_MARKET_CAP_KEY} from '../../config';

const latest_trending_crypto =
  'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

export async function fetchTop100Cryptocurrency() {
  try {
    const headers = {
      'X-CMC_PRO_API_KEY': COIN_MARKET_CAP_KEY,
    };
    const response = await fetch(latest_trending_crypto, {
      headers,
    });

    const json = await response.json();

    return json.data || [];
  } catch (err) {
    return {
      error: {
        message: 'Failed to fetch the cryptocurrencies list',
        error: err,
      },
    };
  }
}

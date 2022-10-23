import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {fetchTop100Cryptocurrency} from '../apis/cryptocurrency';
import CryptoCurrencyDetailsCard from '../components/CryptoCurrencyDetailsCard';
import Loader from '../components/Loader';
import PageView from '../components/PageView';
import {CryptoCurrency} from '../types/CyrptoCurrency.types';

export default function CryptoCurrenciesList() {
  const [currencyList, setCurrencyList] = useState<Array<CryptoCurrency>>([]);
  const [error, setError] = useState<string | null>(null);
  const [showLoader, setLoaderVisibility] = useState(true);

  // fetches the list of currency
  useEffect(() => {
    (async function () {
      const response = await fetchTop100Cryptocurrency();

      if (!response.error) {
        const normalizedList: Array<CryptoCurrency> = response.map(
          currencyData => {
            let quoteKey = Object.keys(currencyData.quote).find(
              currency => currency === 'USD',
            );

            quoteKey = quoteKey || Object.keys(currencyData.quote)[0];

            const quoteDetail = currencyData.quote[quoteKey];

            return {
              id: currencyData.id,
              name: currencyData.name,
              symbol: currencyData.symbol,
              percent_change_1h: quoteDetail.percent_change_1h,
              price: quoteDetail.price,
              price_currency: quoteKey,
              volume_24h: quoteDetail.volume_24h,
              market_cap: quoteDetail.market_cap,
            };
          },
        );
        setCurrencyList(normalizedList);
        setLoaderVisibility(false);
      } else {
        setError(response.error.message);
      }
    })();
  }, []);

  const renderCryptocurrencyCard = ({
    item: currency,
  }: {
    item: CryptoCurrency;
  }) => (
    <CryptoCurrencyDetailsCard
      key={currency.id}
      name={currency.name}
      symbol={currency.symbol}
      percent_change_1h={currency.percent_change_1h}
      price={currency.price}
      price_currency={currency.price_currency}
      market_cap={currency.market_cap}
    />
  );

  if (showLoader) {
    return <Loader />;
  }
  return (
    <PageView title="Latest Cryptocurrency Listings">
      <FlatList
        data={currencyList}
        renderItem={renderCryptocurrencyCard}
        keyExtractor={item => item.id}
      />
    </PageView>
  );
}

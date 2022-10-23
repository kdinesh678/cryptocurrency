import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../styles/colors';
import {CryptoCurrency} from '../types/CyrptoCurrency.types';
import {formatCurrency} from '../utils/currencyFormatter';

type CryptoCurrencyDetailsCardProps = Pick<
  CryptoCurrency,
  | 'name'
  | 'symbol'
  | 'price'
  | 'percent_change_1h'
  | 'price_currency'
  | 'market_cap'
>;

const CryptoCurrencyDetailsCard: React.FC<
  PropsWithChildren<CryptoCurrencyDetailsCardProps>
> = props => {
  const {name, symbol, price, percent_change_1h, price_currency, market_cap} =
    props;

  const priceChangeColor =
    percent_change_1h < 0 ? {color: 'red'} : {color: 'green'};

  return (
    <View style={styles.wrapper}>
      <View style={styles.mb8}>
        <Text style={styles.fontBold}>
          {symbol} . {name}
        </Text>
      </View>
      <View style={styles.flexRow}>
        <View style={styles.flexOne}>
          <View style={styles.mb4}>
            <Text style={styles.fontSmall}>Price</Text>
          </View>
          <Text>{formatCurrency(price, price_currency)}</Text>
        </View>
        <View style={styles.flexOne}>
          <View style={styles.mb4}>
            <Text style={styles.fontSmall}>1h %</Text>
          </View>
          <Text style={priceChangeColor}>{percent_change_1h.toFixed(2)}</Text>
        </View>
        <View style={styles.flexOne}>
          <View style={styles.mb4}>
            <Text style={styles.fontSmall}>Market Cap</Text>
          </View>
          <Text>{formatCurrency(market_cap, price_currency)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    margin: 8,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: colors.cardLightBorder,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexOne: {
    flex: 1,
  },
  fontSmall: {
    fontSize: 12,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  mb4: {
    marginBottom: 4,
  },
  mb8: {
    marginBottom: 8,
  },
});

export default CryptoCurrencyDetailsCard;

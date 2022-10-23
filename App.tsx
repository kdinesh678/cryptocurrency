import React from 'react';
import {SafeAreaView} from 'react-native';
import CryptoCurrenciesList from './src/screens/CryptoCurrenciesList';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CryptoCurrenciesList />
    </SafeAreaView>
  );
};

export default App;

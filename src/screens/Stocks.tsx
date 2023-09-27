import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import StocksTable from '../containers/StocksTable';

export default function Stocks() {
  return (
    <SafeAreaView>
      <Text>Котировки</Text>
      <StocksTable />
    </SafeAreaView>
  );
}

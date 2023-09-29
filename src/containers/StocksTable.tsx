import React from 'react';
import {ActivityIndicator} from 'react-native';
import useMarketsTicker24hQuery from '../DataProvider/useMarketsTicker24hQuery';
import Table from '../views/Table';

const TABLE_KEYS = ['displayName', 'open', 'low', 'high', 'markPrice'];

export default function StocksTable() {
  const {data} = useMarketsTicker24hQuery();
  if (data) {
    return (
      <Table
        data={data}
        dataKeys={TABLE_KEYS}
        keyExtractor={item => item.symbol}
      />
    );
  }
  return <ActivityIndicator size="large" />;
}

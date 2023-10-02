import React from 'react';
import useMarketsTicker24hQuery from '../DataProvider/useMarketsTicker24hQuery';
import Spinner from '../views/Spinner';
import Table from '../views/Table';

const TABLE_KEYS = ['displayName', 'open', 'low', 'high', 'markPrice'];

export default function StocksTable() {
  const {data} = useMarketsTicker24hQuery();
  if (data) {
    return (
      <Table
        data={data}
        columns={TABLE_KEYS}
        keyExtractor={item => item.symbol}
      />
    );
  }
  return <Spinner />;
}

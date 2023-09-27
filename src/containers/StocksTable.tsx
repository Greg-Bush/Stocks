import React from 'react';
import useMarketsTicker24hQuery from '../DataProvider/useMarketsTicker24hQuery';

export default function StocksTable() {
  const data = useMarketsTicker24hQuery();
  console.log(data);
  return <></>;
}

import React from 'react';
import useMarketsTicker24hQuery from '../data/queries/useMarketsTicker24hQuery';
import useError from '../hooks/useError';
import useFocusStateValue from '../hooks/useFocusStateValue';
import Spinner from '../views/Spinner';
import Table from '../views/Table';
import {AbstractItem} from '../views/Table/AbstractItem';

const REFETCH_INTERVAL = 5000;
const TABLE_KEYS = ['displayName', 'open', 'low', 'high', 'markPrice'];

function keyExtractor(item: AbstractItem) {
  return item.symbol.toString();
}

export default function StocksTable() {
  const refetchInterval = useFocusStateValue(REFETCH_INTERVAL, false);

  const {data, error} = useMarketsTicker24hQuery(refetchInterval);
  useError(error);

  if (data) {
    return (
      <Table data={data} columns={TABLE_KEYS} keyExtractor={keyExtractor} />
    );
  }
  return <Spinner />;
}

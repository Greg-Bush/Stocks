import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import useMarketsTicker24hQuery from '../DataProvider/useMarketsTicker24hQuery';
import useError from '../hooks/useError';
import Spinner from '../views/Spinner';
import Table from '../views/Table';
import {AbstractItem} from '../views/Table/AbstractItem';

const REFETCH_INTERVAL = 5000;
const TABLE_KEYS = ['displayName', 'open', 'low', 'high', 'markPrice'];

const keyExtractor: (item: AbstractItem) => string = item =>
  item.symbol.toString();

export default function StocksTable() {
  const [refetchInterval, setRefetchInterval] = useState<number | false>(
    REFETCH_INTERVAL,
  );

  const {data, error} = useMarketsTicker24hQuery(refetchInterval);
  useError(error);

  useFocusEffect(
    React.useCallback(() => {
      setRefetchInterval(REFETCH_INTERVAL);
      return () => setRefetchInterval(false);
    }, []),
  );

  if (data) {
    return (
      <Table data={data} columns={TABLE_KEYS} keyExtractor={keyExtractor} />
    );
  }
  return <Spinner />;
}

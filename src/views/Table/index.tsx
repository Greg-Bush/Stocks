import React from 'react';
import {useAsync} from 'react-async-hook';
import {FlatList, ScrollView} from 'react-native';
import Spinner from '../Spinner';
import {AbstractItem} from './AbstractItem';
import Row from './Row';
import getColumnSizes from './getColumnSizes';
import Head from './Head';
import useError from '../../hooks/useError';

export default function Table<DataItem extends AbstractItem>(props: {
  data: DataItem[];
  columns: string[];
  keyExtractor: (item: DataItem) => string;
}) {
  const {data, columns, keyExtractor} = props;

  const {
    result: widths,
    loading,
    error,
  } = useAsync(getColumnSizes, [data, columns]);
  useError(error);

  if (loading || !widths) {
    return <Spinner />;
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Head widths={widths} items={columns} />}
        data={data}
        renderItem={({item}) => (
          <Row item={item} widths={widths} columns={columns} />
        )}
        keyExtractor={keyExtractor}
      />
    </ScrollView>
  );
}

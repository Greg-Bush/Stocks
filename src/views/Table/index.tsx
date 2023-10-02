import React from 'react';
import {useAsync} from 'react-async-hook';
import {FlatList, ScrollView} from 'react-native';
import Spinner from '../Spinner';
import {AbstractItem} from './AbstractItem';
import Row from './Row';
import getColumnSizes from './getColumnSizes';

export default function Table<DataItem extends AbstractItem>(props: {
  data: DataItem[];
  columns: string[];
  keyExtractor: (item: DataItem) => string;
}) {
  const {data, columns, keyExtractor} = props;

  const {result: widths, loading} = useAsync(getColumnSizes, [data, columns]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <ScrollView horizontal>
      <FlatList
        ListHeaderComponent={() => <></>}
        data={data}
        renderItem={({item}) => (
          <Row item={item} widths={widths} columns={columns} />
        )}
        keyExtractor={keyExtractor}
      />
    </ScrollView>
  );
}

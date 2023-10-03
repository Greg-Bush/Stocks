import React, {useMemo} from 'react';
import {FlatList, ScrollView} from 'react-native';
import {AbstractItem} from './AbstractItem';
import Head from './Head';
import Row from './Row';
import getColumnSizes from './getColumnSizes';

function Table<DataItem extends AbstractItem>(props: {
  data: DataItem[];
  columns: string[];
  keyExtractor: (item: DataItem) => string;
}) {
  const {data, columns, keyExtractor} = props;

  const widths = useMemo(() => getColumnSizes(data, columns), [data, columns]);

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

export default Table;

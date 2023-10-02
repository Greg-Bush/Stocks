import React, {useCallback} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AbstractItem} from './AbstractItem';
import {useAsync} from 'react-async-hook';
import getColumnSizes from './getColumnSizes';
import Spinner from '../Spinner';

export default function Table<DataItem extends AbstractItem>(props: {
  data: DataItem[];
  columns: string[];
  keyExtractor: (item: DataItem) => string;
}) {
  const {data, columns, keyExtractor} = props;

  const asyncColumnSizes = useAsync(getColumnSizes, [data, columns]);

  const renderRow = useCallback(
    (info: ListRenderItemInfo<DataItem>) => {
      const widths = asyncColumnSizes.result;
      if (!widths) {
        return null;
      }
      return (
        <View style={styles.row}>
          {columns.map((key, index) => (
            <Text style={{width: widths[index]}} key={key}>
              {info.item[key]}
            </Text>
          ))}
        </View>
      );
    },
    [asyncColumnSizes.result, columns],
  );

  if (asyncColumnSizes.loading) {
    return <Spinner />;
  }

  return (
    <FlatList
      ListHeaderComponent={() => <></>}
      data={data}
      renderItem={renderRow}
      keyExtractor={keyExtractor}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

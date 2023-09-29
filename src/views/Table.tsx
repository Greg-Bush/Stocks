import React, {useCallback} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Table<
  DataItem extends {[key: string]: string | number},
>(props: {
  data: DataItem[];
  dataKeys: string[];
  keyExtractor: (item: DataItem) => string;
}) {
  const {data, dataKeys, keyExtractor} = props;

  const renderRow = useCallback(
    (info: ListRenderItemInfo<DataItem>) => {
      return (
        <View style={styles.row}>
          {dataKeys.map(key => (
            <Text key={key}>{info.item[key]}</Text>
          ))}
        </View>
      );
    },
    [dataKeys],
  );

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

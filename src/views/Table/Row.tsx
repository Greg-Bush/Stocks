import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AbstractItem} from './AbstractItem';

function Row({
  widths,
  columns,
  item,
}: {
  widths: number[] | undefined;
  columns: string[];
  item: AbstractItem;
}) {
  if (!widths) {
    return null;
  }
  return (
    <View style={styles.row}>
      {columns.map((key, index) => (
        <Text style={{width: widths[index]}} key={key}>
          {item[key]}
        </Text>
      ))}
    </View>
  );
}

export default memo(Row);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

import React, {memo} from 'react';
import {View} from 'react-native';
import {AbstractItem} from './AbstractItem';
import Cell from './Cell';
import {styles} from './styles';

function Row({
  widths,
  columns,
  item,
}: {
  widths: number[];
  columns: string[];
  item: AbstractItem;
}) {
  return (
    <View style={styles.row}>
      {columns.map((key, index) => (
        <Cell width={widths[index]} key={key} value={item[key].toString()} />
      ))}
    </View>
  );
}

export default memo(Row);

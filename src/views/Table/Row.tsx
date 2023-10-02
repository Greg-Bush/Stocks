import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {AbstractItem} from './AbstractItem';
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
        <Text style={{width: widths[index]}} key={key}>
          {item[key]}
        </Text>
      ))}
    </View>
  );
}

export default memo(Row);

import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

function Head({widths, items}: {widths: number[]; items: string[]}) {
  return (
    <View style={styles.row}>
      {items.map((item, index) => (
        <Text key={item} style={{width: widths[index]}}>
          {item}
        </Text>
      ))}
    </View>
  );
}

export default memo(Head);

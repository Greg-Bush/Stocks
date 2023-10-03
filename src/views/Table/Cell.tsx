import React, {memo} from 'react';
import {Text} from 'react-native';

// TODO: animate
function Cell({width, value}: {width: number; value: string}) {
  return <Text style={{width}}>{value}</Text>;
}

export default memo(Cell);

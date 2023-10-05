import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';

export default function useFocusStateValue<T1, T2>(
  focusedValue: T1,
  unfocusedValue: T2,
) {
  const [state, setState] = useState<T1 | T2>(focusedValue);

  useFocusEffect(
    React.useCallback(() => {
      setState(focusedValue);
      return () => setState(unfocusedValue);
    }, [focusedValue, unfocusedValue]),
  );

  return state;
}

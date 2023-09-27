/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {ToastProvider} from 'react-native-toast-notifications';
import Navigation from './src/Navigation';

const App = () => {
  return (
    <ToastProvider>
      <Navigation />
    </ToastProvider>
  );
};

export default App;

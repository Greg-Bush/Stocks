import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import About from '../screens/About';
import Stocks from '../screens/Stocks';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Котировки" component={Stocks} />
        <Tab.Screen name="О приложении" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

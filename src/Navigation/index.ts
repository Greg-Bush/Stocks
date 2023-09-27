import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import About from '../screens/About';
import Stocks from '../screens/Stocks';

const TabNavigator = createBottomTabNavigator({
  About,
  Stocks,
});

export default createAppContainer(TabNavigator);

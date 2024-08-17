import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// screens

import GoldLite from '../screens/home/GoldLite';
import Assisted from '../screens/home/Assisted';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={GoldLite} />
      <Tab.Screen name="Settings" component={Assisted} />
    </Tab.Navigator>
  );
}
export default MyTabs;

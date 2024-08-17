import React from 'react';
import {} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//screens
import GoldLite from '../home/GoldLite';
import Assisted from '../home/Assisted';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const Categories = (): React.JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'pink',
        },
        tabBarLabelStyle: {
          fontWeight: '600',
          textTransform: 'capitalize',
        },
        tabBarActiveTintColor: 'pink',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Screen name="Gold-Lite" component={GoldLite} />
      <Screen name="Assisted" component={Assisted} />
    </Navigator>
  );
};

export default Categories;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// screens
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const AppNavigator = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;

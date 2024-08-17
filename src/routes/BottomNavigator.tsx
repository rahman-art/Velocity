import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//icons
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// screens
import Welcome from '../screens/bottom/Welcome';
import Categories from '../screens/bottom/Categories';

const Bottom = createBottomTabNavigator();

const BottomNavigator = (): React.JSX.Element => {
  return (
    <Bottom.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Welcome') {
            iconName = 'home';
            return <Feather name={iconName} size={size} color={color} />;
          } else if (route.name === 'Categories') {
            iconName = 'category';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
      })}>
      <Bottom.Screen
        name="Welcome"
        component={Welcome}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons name="category" size={size} color={color} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

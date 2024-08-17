import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icon library
import BottomNavigator from './BottomNavigator';
import Notifiacation from '../screens/Notifiacation';
import GoldLite from '../screens/home/GoldLite';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerNavigator = (): React.JSX.Element => {
  return (
    <Navigator
      screenOptions={({navigation}) => ({
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon name="menu" size={25} style={{marginLeft: 15}} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Icon
              name="notifications-outline"
              size={25}
              style={{marginRight: 15}}
            />
          </TouchableOpacity>
        ),
        drawerType: 'front',
      })}>
      <Screen
        name="Bottom"
        component={BottomNavigator}
        options={{
          title: 'Category Data',
        }}
      />
      <Screen name="Notification" component={Notifiacation} />
    </Navigator>
  );
};

export default DrawerNavigator;

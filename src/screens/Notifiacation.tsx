import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const Notifiacation = (): React.JSX.Element => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, color: 'black', fontWeight: '700'}}>
        Notification
      </Text>
    </SafeAreaView>
  );
};

export default Notifiacation;

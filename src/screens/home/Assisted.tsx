import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Assisted = (): React.JSX.Element => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, color: 'black', fontWeight: '700'}}>
        Assisted
      </Text>
    </SafeAreaView>
  );
};

export default Assisted;

const styles = StyleSheet.create({});

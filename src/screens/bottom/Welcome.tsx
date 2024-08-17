import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const Welcome = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Welcome</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
});

export default Welcome;

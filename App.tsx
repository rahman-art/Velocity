// import "react-native-gesture-handler"
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/routes';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <StatusBar animated barStyle="dark-content" backgroundColor="white" />

      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;

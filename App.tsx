import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from './src/Header';
import Applewallet from './src/apple-wallet-screen/AppleWalletScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.appView}>
        <Header />
        <Applewallet />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  appView: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default App;

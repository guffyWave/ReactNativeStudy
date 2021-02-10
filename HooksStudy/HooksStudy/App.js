/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ClassCounter from './App/Components/ClassCounter';
import HookCounter2 from './App/Components/HookCounter2';
import HookCounter3 from './App/Components/HookCounter3';
import HookCounter4 from './App/Components/HookCounter4';
import HooksCounter from './App/Components/HooksCounter';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ClassCounter />

        <HooksCounter />

        <HookCounter2 />

        <HookCounter3 />

        <HookCounter4 />
      </SafeAreaView>
    </>
  );
};

export default App;

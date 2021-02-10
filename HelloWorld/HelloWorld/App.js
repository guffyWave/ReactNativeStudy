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
import User from './users/User';
import Users from './users/Users';
import {AppleComponent} from './users/FunctionStudy';
import {Papaya, UserArrowFunc_Mango, getPhone} from './users/FunctionStudy';
import MyDefaultComponent from './users/FunctionStudy';
//import functions from './users/FunctionStudy';
import {doWork} from './users/AsyncAwaitStudy';
const App: () => React$Node = () => {
  //functions.greetUser();

  AppleComponent();

  console.log('Before calling doWork');
  let res = doWork();
  console.log('After calling doWork');
  console.log(res);
  res.then((data) => {
    console.log(data);
  });

  return (
    <SafeAreaView>
      <Text>Apple </Text>
      <Users />

      <Text>Next item ----------</Text>

      <User age="30">Gufran</User>
      <User>Farhan</User>
      <User age="26">Salman</User>

      {/* {Papaya()} */}

      {/* {UserArrowFunc_Mango()} */}

      {/* {MyDefaultComponent()} */}

      <AlphaComponent></AlphaComponent>
      <BetaComponent></BetaComponent>

      <Text> {getPhone('Nokia')('8274838')}</Text>
    </SafeAreaView>
  );
};

export default App;

const AlphaComponent = () => {
  return <Text>AlphaComponent</Text>;
};

//gets hoisted
function BetaComponent() {
  return <Text>Beta Component</Text>;
}

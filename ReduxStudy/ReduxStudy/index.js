/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

console.log('index.js called ----');

console.log('index.js AppRegistery.registerComponent  called ----');
AppRegistry.registerComponent(appName, () => App);

console.log('index.js end called ----');

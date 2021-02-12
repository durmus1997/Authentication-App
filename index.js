/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import 'babel-polyfill';
import AsyncStorage from '@react-native-community/async-storage';

AppRegistry.registerComponent('AuthenticationApp', () => App);

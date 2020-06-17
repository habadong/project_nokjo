import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';

axios.defaults.baseURL = 'http://apis.data.go.kr/B500001/rwis/waterQuality';

AppRegistry.registerComponent(appName, () => App);

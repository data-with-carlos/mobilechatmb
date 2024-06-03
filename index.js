import { AppRegistry } from 'react-native';
import App from './App'; // Make sure the path to your App component is correct
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

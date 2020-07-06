import { registerRootComponent } from 'expo';

import {AppRegistry} from 'react-native';
import App from './CustomerHome';
import {name as project1} from './app.json';

AppRegistry.registerComponent(project1, () => App);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

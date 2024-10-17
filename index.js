/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
export default function Main() {
    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary : "#001219",
          primaryLite : "#108bbc",
          secondary :" #BB3E03",
          highlight : "#94D2BD",
          highlightLite : "#94d2bd2a",
          highlightTranslucent : "#94d2bda9",
        },
      };
    return (
      <PaperProvider>
        <App/>
      </PaperProvider>
    );
  }
AppRegistry.registerComponent(appName, () => Main);

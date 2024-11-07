import React from 'react'
import { store } from './components/redux/store'
import { Provider } from 'react-redux'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import AppNavigation from './components/common/navigation/AppNavigation'
import BottomNavigation from './components/common/navigation/BottomNavigation';

const App = () => {
  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white', // Your custom background color
    },
  };
  
  return (
    <Provider store={store}>
      <NavigationContainer theme={customTheme}>
       <AppNavigation/>
      </NavigationContainer>
    </Provider>
  )
}

export default App
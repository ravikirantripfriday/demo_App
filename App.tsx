import { View, Text } from 'react-native'
import React from 'react'
import FlightSearch from './components/Flight/FlightSearch'
import { store } from './components/redux/store'
import { Provider } from 'react-redux'
import Home from './components/home/Home'
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
    <Provider store={store}>
     {/* <FlightSearch/> */}
     <Home/>
    </Provider>
    </NavigationContainer>
  )
}

export default App
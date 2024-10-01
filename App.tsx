import { View, Text } from 'react-native'
import React from 'react'
import FlightSearch from './components/Flight/FlightSearch'
import { store } from './components/redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex:1}}>
     <FlightSearch/>
    </View>
    </Provider>
  )
}

export default App
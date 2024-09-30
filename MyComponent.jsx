import { View, Text } from 'react-native'
import React from 'react'
import Logo from "./components/contex/facebook.svg"
const MyComponent = () => {
  return (
    <View style={{padding:20}}>
     <Logo width={"100%"} height={"100%"} />
    </View>
  )
}

export default MyComponent
import { View, Text } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

const Header = () => {
  return (
    <View style={{height:ms(90)}}>
      <Text>Header</Text>
    </View>
  )
}

export default Header
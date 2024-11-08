import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import FlightList from '../../Flight/FlightList';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="tab" component={BottomNavigation} />
    <Stack.Screen name="FlightList" component={FlightList} />
  </Stack.Navigator>
  )
}

export default AppNavigation
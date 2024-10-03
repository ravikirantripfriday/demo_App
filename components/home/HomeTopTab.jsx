import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
function Flight() {
    return (
        <Text>Flight</Text>
    );
}
const Hotel=()=>
    {
        return(
            <Text>Flight</Text>
        )
    }
    const Bus=()=>
        {
            return(
                <Text>Flight</Text>
            )
        }
        const Cab=()=>{
                return(
                    <Text>Flight</Text>
                )
            }
const HomeTopTab = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Flight} />
    <Tab.Screen name="Settings" component={Hotel} />
    <Tab.Screen name="Bus" component={Bus} />
    <Tab.Screen name="Cab" component={Cab} />
  </Tab.Navigator>
  )
}

export default HomeTopTab
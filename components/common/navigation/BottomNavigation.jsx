import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../home/Home';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { fonts } from '../../config/theme';
import { ms } from 'react-native-size-matters';
import IconSwitcher from '../../icons/IconSwitcher';

const Tab = createBottomTabNavigator();
const MyTrips = () => <Text>MyTrips Screen</Text>;
const Wallet = () => <Text>Wallet Screen</Text>;
const Profile = () => <Text>Profile Screen</Text>;

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: ms(80),
        //   backgroundColor: 'green',
        //   borderRadius: ms(40),
        //   margin: ms(10),
        borderTopLeftRadius:ms(40),
        borderTopRightRadius:ms(40),
          overflow:"hidden"
        },
        tabBarLabelStyle: {
          fontSize: ms(14),
          fontFamily: fonts.primary,
          textAlign: 'center', 
        },
        tabBarIconStyle: {
          justifyContent: 'center',
          alignItems: 'center', 
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let component
          if (route.name === 'Home') {
            iconName ='home' ;
            component="AntDesign"
          } else if (route.name === 'MyTrips') {
            iconName ="wallet-travel" ;
             component="MaterialCommunityIcons"
          }
          else if (route.name === 'Wallet') {
            iconName ="wallet" ;
             component="Entypo"
          }
          else if (route.name === 'Profile') {
            iconName ="person" ;
             component="Ionicons"
          }
          return (
            <IconSwitcher
              componentName={component}
              iconName={iconName}
              color={color}
              iconsize={25}
            />
          );
        },
        tabBarButton: (props) => (
          <TouchableWithoutFeedback {...props}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              {props.children}
            </View>
          </TouchableWithoutFeedback>
        ),
        tabBarHideOnKeyboard:true
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyTrips" component={MyTrips} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

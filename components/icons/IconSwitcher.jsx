import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import { colors } from '../config/theme';
import { ms } from 'react-native-size-matters';

const IconSwitcher = ({ componentName, iconName, color, iconsize }) => {
  switch (componentName) {
    case 'AntDesign':
      return <AntDesign name={iconName} color={color || colors.primary} size={ms(iconsize || 25)} />;
    case 'Entypo':
      return <Entypo name={iconName} color={color || colors.primary} size={ms(iconsize || 25)} />;
    case 'EvilIcons':
      return <EvilIcons name={iconName} color={color || colors.primary} size={ms(iconsize || 25)} />;
    case 'Feather':
      return <Feather name={iconName} color={color || colors.primary} size={ms(iconsize || 25)} />;
    case 'FontAwesome':
      return <FontAwesome name={iconName} color={color || colors.primary} size={ms(iconsize || 25)} />;
    case 'FontAwesome5':
      return <FontAwesome5 name={iconName} color={color || colors.primary} size={ms(iconsize || 25)} />;
    case 'Fontisto':
      return <Fontisto name={iconName} color={color || colors.primary} size={ms(iconsize || 25)} />;
    case 'Foundation':
      return <Foundation name={iconName} color={color || colors.primary} size={ms(iconsize || 25)} />;
    case 'Ionicons':
      return <Ionicons name={iconName} color={color || colors.primary} size={ms(iconsize || 25)} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={iconName} color={color || colors.primary} size={ms(iconsize || 25)} />;
    case 'MaterialIcons':
      return <MaterialIcons name={iconName} color={color || colors.primary} size={ms(iconsize || 25)} />;
    case 'Octicons':
      return <Octicons name={iconName} color={color || colors.primary} size={ms(iconsize || 25)} />;
    case 'SimpleLineIcons':
      return <SimpleLineIcons name={iconName} color={color || colors.primary} size={ms(iconsize || 25)} />;
    case 'Zocial':
      return <Zocial name={iconName} color={color || colors.primary} size={ms(iconsize || 25)} />;
    default:
      console.warn(`Unknown Component Name ${componentName}`);
      return null; // Or you could return a default icon component here
  }
};

export default IconSwitcher;

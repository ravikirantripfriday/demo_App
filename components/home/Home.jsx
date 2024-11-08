import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import HomeTopTab from './HomeTopTab';
import { styles } from './styles';
import { colors } from '../config/theme';

const Home = (props) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{position: 'absolute', width: '100%', height: '100%'}}>
        <View style={{height:300, backgroundColor:colors.primary}} />
        <View style={{flex: 1, backgroundColor: 'white'}} />
      </View>
     <View style={styles.mainContainer}>
     <HomeTopTab {...props}/>
     </View>
    </SafeAreaView>
  );
};

export default Home;

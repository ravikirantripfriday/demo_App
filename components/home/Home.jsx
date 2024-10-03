import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import HomeTopTab from './HomeTopTab';

const Home = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{position: 'absolute', width: '100%', height: '100%'}}>
        <View style={{flex: 0.8, backgroundColor: 'yellow'}} />
        <View style={{flex: 1, backgroundColor: 'white'}} />
      </View>
      <HomeTopTab/>
    </SafeAreaView>
  );
};

export default Home;

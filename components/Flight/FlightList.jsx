
import React, { useRef } from 'react';
import { Animated, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { ms } from 'react-native-size-matters';
import Header from '../common/header/Header';

const data = new Array(20).fill().map((x, i) => i + 1);
const cardHeight = ms(200);
const padding = 10;
const offset = cardHeight + padding;

const FlightList = () => {
    const scrollY = useRef(new Animated.Value(0)).current;
    const renderFooter = () => (
        <View style={styles.footer}>
          <Text style={styles.footerText}>End of the List</Text>
        </View>
      );
    return (
        <View style={{flex:1}}>
            <Header/>
            <FlatList
            style={styles.container}
            data={data}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                useNativeDriver: false,
            })}
            keyExtractor={item => item}
            renderItem={({ item, index }) => {
                const inputRange = [offset * index, offset * index + offset];
                const outputRange1 = [1, 0];
                const outputRange2 = [0, offset / 2];
                const scale = scrollY.interpolate({
                    inputRange,
                    outputRange: outputRange1,
                    extrapolate: 'clamp',
                });
                const translateY = scrollY.interpolate({
                    inputRange,
                    outputRange: outputRange2,
                    extrapolate: 'clamp',
                });
                const opacity = scale;
                return (
                   <TouchableOpacity>
                     <Animated.View
                        style={[styles.card, { opacity, transform: [{ translateY }, { scale }] }]}
                    />
                   </TouchableOpacity>
                );
            }}
            contentContainerStyle={{paddingBottom:ms(30)}}
            ListFooterComponent={renderFooter}
        />
        </View>
    );
}

export default FlightList

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        paddingVertical: padding / 2,
    },
    card: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: padding / 2,
        height: cardHeight,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    footer: {
        alignItems: 'center',
        marginVertical: ms(20),
      },
      footerText: {
        fontSize: 16,
        color: '#333',
      },
});

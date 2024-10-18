import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors, fonts } from '../config/theme';
import { ScaledSheet } from 'react-native-size-matters';
import IconSwitcher from '../icons/IconSwitcher';
import { logo, logo2 } from './assets';
import FlightSearch from '../Flight/FlightSearch';

const FlightsScreen = () => {
  return (
    <>
      <Text style={styles.screenText}>Flights Screen</Text>
      <TextInput />
    </>
  );
};
const HotelsScreen = () => <Text style={styles.screenText}>Hotels Screen</Text>;
const CabsScreen = () => <Text style={styles.screenText}>Cabs Screen</Text>;
const BusScreen = () => <Text style={styles.screenText}>Bus Screen</Text>;

export default function CustomNavBar() {
  const [activeTab, setActiveTab] = useState('Flights');
  const flatListRef = useRef(null);

  const tabs = [
    { label: 'Flights', icon: 'plane-departure', component: FlightSearch },
    { label: 'Hotels', icon: 'hotel', component: HotelsScreen },
    { label: 'Cabs', icon: 'taxi', component: CabsScreen },
    { label: 'Bus', icon: 'bus-alt', component: BusScreen },
  ];

  const ActiveScreenComponent = tabs.find((tab) => tab.label === activeTab)
    ?.component;

  const handleTabPress = (index) => {
    setActiveTab(tabs[index].label);
    flatListRef.current.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.navBar}>
        <FlatList
          ref={flatListRef}
          data={tabs}
          horizontal
          keyExtractor={(item) => item.label}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.tabItem,
                activeTab === item.label && styles.activeTabItem,
              ]}
              onPress={() => handleTabPress(index)}
            >
              <IconSwitcher
                componentName="FontAwesome5"
                iconName={item.icon}
                iconsize={20}
                color={activeTab === item.label ? '#fff' : '#000'}
              />
              <Text
                style={[
                  styles.tabText,
                  {
                    color: activeTab === item.label ? colors.white : colors.primary,
                  },
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.screenContainer}>
          {ActiveScreenComponent && <ActiveScreenComponent />}
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    padding: "20@ms",
    marginTop: '20@ms',
    borderRadius:"10@ms",
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: "2@ms" },
    shadowOpacity: 0.1,
    shadowRadius: "6@ms",
    elevation: 4,
  },
  scrollViewContent: {
    flexGrow: 1, // Ensure ScrollView takes full height for scrolling
    paddingBottom: "100@ms", // Add bottom padding to avoid content being cut off
  },
  screenText: {
    fontSize: '18@ms',
    fontFamily: fonts.primary,
    color: colors.primary,
  },
  navBar: {
    backgroundColor: '#fff',
    marginTop: '10@ms',
    minHeight: '55@ms',
    borderRadius: '15@msr',
    overflow: 'hidden',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10@ms',
    flexDirection: 'row',
    gap: '8@ms',
  },
  activeTabItem: {
    backgroundColor: colors.primaryLite,
  },
  tabText: {
    fontSize: '15@ms',
    fontFamily: fonts.primary,
  },
  logo: {
    width: "150@ms",
    height: "50@ms",
    marginTop: "20@ms",
  },
});

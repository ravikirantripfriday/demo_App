import {
  Keyboard,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Checkbox, List, Text, TextInput} from 'react-native-paper';

const FlightSearch = () => {
  const [text, setText] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [cabinClass, setCabinClass] = useState('Economy');
  const [cabinClassexpanded, setCabinClassexpanded] = useState(false);
  const [checked, setChecked] = useState(false);
  const handlePress = () => setExpanded(!expanded);
  const handlePressCabinClass = () =>
    setCabinClassexpanded(!cabinClassexpanded);
  const handleSelect = value => {
    setSelectedValue(value);
    setExpanded(false);
  };
  const handleSelectCabinClass = value => {
    setCabinClass(value);
    setCabinClassexpanded(false);
  };
  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setExpanded(false);
        }}>
        <View style={{padding: 20, flex: 1}}>
          <View style={{gap: 10}}>
            <TextInput
              mode="outlined"
              style={{fontSize: 20}}
              value={text}
              onChangeText={setText}
              placeholder="Origin"
            />
            <TextInput
              mode="outlined"
              style={{fontSize: 20}}
              value={text}
              onChangeText={setText}
              placeholder="Destination"
            />
            <TouchableOpacity>
              <TextInput
                mode="outlined"
                style={{fontSize: 20}}
                value={text}
                onChangeText={setText}
                placeholder="Departure"
                editable={false}
                pointerEvents="none"
              />
            </TouchableOpacity>
          </View>
          <List.Section>
            <List.Accordion
              title={selectedValue ? `Adults: ${selectedValue}` : 'Adults'}
              // left={props => !selectedValue && <List.Icon {...props} icon="account" color="black" />}
              expanded={expanded}
              onPress={handlePress}
              style={{
                width: '50%',
                // backgroundColor: "red",
                // borderRadius: 20,
                borderWidth: 1,
              }}
              titleStyle={{fontSize: 20, color: 'black'}}
              description={!selectedValue ? '12 Yrs +' : null}
              descriptionStyle={{
                color: 'black',
              }}>
              <View style={{borderWidth: 1, width: '50%'}}>
                <List.Item title="0" onPress={() => handleSelect('0')} />
                <List.Item title="1" onPress={() => handleSelect('1')} />
                <List.Item title="2" onPress={() => handleSelect('2')} />
                <List.Item title="3" onPress={() => handleSelect('3')} />
                <List.Item title="4" onPress={() => handleSelect('4')} />
                <List.Item title="5" onPress={() => handleSelect('5')} />
                <List.Item title="6" onPress={() => handleSelect('6')} />
                <List.Item title="7" onPress={() => handleSelect('7')} />
                <List.Item title="8" onPress={() => handleSelect('8')} />
                <List.Item title="9" onPress={() => handleSelect('9')} />
              </View>
            </List.Accordion>
          </List.Section>
          <List.Section>
            <List.Accordion
              title={cabinClass}
              expanded={cabinClassexpanded}
              onPress={handlePressCabinClass}
              style={{
                borderWidth: 1,
              }}
              titleStyle={{fontSize: 20, color: 'black'}}>
              <View style={{borderWidth: 1}}>
                <List.Item
                  title="Economy"
                  onPress={() => handleSelectCabinClass('Economy')}
                />
                <List.Item
                  title="Premium Economy"
                  onPress={() => handleSelectCabinClass('Premium Economy')}
                />
                <List.Item
                  title="Business"
                  onPress={() => handleSelectCabinClass('Business')}
                />
                <List.Item
                  title="First"
                  onPress={() => handleSelectCabinClass('First')}
                />
                <List.Item
                  title="Any cabin class"
                  onPress={() => handleSelectCabinClass('Any cabin class')}
                />
              </View>
            </List.Accordion>
          </List.Section>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text variant="headlineSmall">Direct Flights only</Text>
          </View>
          <Button mode="contained" onPress={() => console.log('Pressed')} rippleColor={"white"} buttonColor='black'  dark labelStyle={{fontSize:20}} style={{height:"13%",justifyContent:'center'}} contentStyle={{height:"100%"}}>
            Search Flight
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default FlightSearch;


// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from '../redux/reducer'
// import { View, Text, Button } from 'react-native';
//  function FlightSearch() {
//   const count = useSelector((state) => state.mainReducer.value)
//   const dispatch = useDispatch()
//   return (
//     <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
//     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//       <Button
//         title="Increment"
//         onPress={() => dispatch(increment())}
//       />
//       <Text style={{ marginHorizontal: 20, fontSize: 24 }}>{count}</Text>
//       <Button
//         title="Decrement"
//         onPress={() => dispatch(decrement())}
//       />
//     </View>
//   </View>
//   )
// }
// export default FlightSearch;

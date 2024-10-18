import {
  Keyboard,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useReducer, useState} from 'react';
import {Button, Checkbox, List, Text, TextInput} from 'react-native-paper';
import { ms } from 'react-native-size-matters';
const initialState=
{
  origin: '',
  destination: '',
  departure: '',
  cabinClass: 'Economy',
  adults: null,
  directFlight: false,
}
const reducer=(state,action)=>
{
  switch(action.type){
case "origin":
  return{
    ...state,
    [action.field]:action.value,
  }
  case "destination":
    {
      return{
        ...state,
        [action.field]:action.value
      }
    }
    case "departure":
      {
        return{
          ...state,
          [action.field]:action.value
        }
      }
      case "cabinClass":{
        return{
          ...state,
          [action.field]:action.value
        }
      }
      case "adults":{
        return{
          ...state,
          [action.field]:action.value
        }
      }
      case "directFlight":{
        return{
          ...state,
          [action.field]:action.value
        }
      }
default:
  return state
  }
}
const FlightSearch = () => {
  const [text, setText] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [cabinClass, setCabinClass] = useState('Economy');
  const [cabinClassexpanded, setCabinClassexpanded] = useState(false);
  const [checked, setChecked] = useState(false);
  const [state,dispatch]=useReducer(reducer,initialState)
  const handlePress = () => setExpanded(!expanded);
  const handlePressCabinClass = () =>
    setCabinClassexpanded(!cabinClassexpanded);
  const handleSelect = value => {
    dispatch({type:"adults",field:"adults",value:value})
    setExpanded(false);
  };
  const handleSelectCabinClass = value => {
    dispatch({type:"cabinClass",field:"cabinClass",value:value})
    setCabinClassexpanded(false);
  };
  return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setExpanded(false);
          setCabinClassexpanded(false);
        }}>
        <ScrollView style={{ flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={{gap: 10}}>
            <TextInput
              mode="outlined"
              style={{fontSize: 20}}
              value={state.origin}
              onChangeText={text=>
              {
              dispatch({type:"origin",field:"origin",value:text})
              }
              }
              placeholder="Origin"
            />
            <TextInput
              mode="outlined"
              style={{fontSize: 20}}
              value={state.destination}
              onChangeText={text=>
              {
                dispatch({type:"destination",field:'destination',value:text})
              }
              }
              placeholder="Destination"
            />
            <TouchableOpacity>
              <TextInput
                mode="outlined"
                style={{fontSize: 20}}
                value={state.departure}
                onChangeText={text=>
                {
                  dispatch({type:'departure',field:'departure',value:text})
                }
                }
                placeholder="Departure"
                editable={false}
                pointerEvents="none"
              />
            </TouchableOpacity>
          </View>
          <List.Section>
            <List.Accordion
              title={state.adults ? `Adults: ${state.adults}` : 'Adults'}
              // left={props => !selectedValue && <List.Icon {...props} icon="account" color="black" />}
              expanded={expanded}
              onPress={handlePress}
              style={{
                width: '60%',
                // backgroundColor: "red",
                borderRadius: 6,
                borderWidth: 1,
              }}
              titleStyle={{fontSize: 20, color: 'black'}}
              description={!state.adults ? '12 Yrs +' : null}
              descriptionStyle={{
                color: 'black',
              }}
              >
              <View style={{borderWidth: 1, width: '60%',marginTop:10, borderRadius: 6,}}>
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
              title={state.cabinClass}
              expanded={cabinClassexpanded}
              onPress={handlePressCabinClass}
              style={{
                borderWidth: 1,
                borderRadius: 6,
              }}
              titleStyle={{fontSize: 20, color: 'black'}}>
              <View style={{borderWidth: 1,marginTop:10, borderRadius: 6}}>
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
              status={state.directFlight ? 'checked' : 'unchecked'}
              onPress={() => {
                dispatch({type:'directFlight',field:"directFlight",value:!state.directFlight})
              }}
            />
            <Text variant="headlineSmall">Direct Flights only</Text>
          </View>
          <Button mode="contained" onPress={() => console.log(state)} rippleColor={"white"} buttonColor='black'  dark labelStyle={{fontSize:20}} style={{height:ms(50),justifyContent:'center',marginTop:ms(10)}} contentStyle={{height:"100%"}}>
            Search Flight
          </Button>
        </ScrollView>
      </TouchableWithoutFeedback>
  );
};

export default FlightSearch;
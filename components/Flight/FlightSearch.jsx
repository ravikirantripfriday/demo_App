import {
  Keyboard,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useReducer, useState} from 'react';
import {Button, Checkbox, List, Text, TextInput} from 'react-native-paper';
import {ms} from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
const initialState = {
  origin: '',
  destination: '',
  departure: '',
  cabinClass: 'Economy',
  adults: null,
  directFlight: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'origin':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'destination': {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case 'departure': {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case 'cabinClass': {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case 'adults': {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case 'directFlight': {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    default:
      return state;
  }
};
const airports = [
  {
    name: "Indira Gandhi International Airport",
    code: "DEL",
    city: "Delhi",
    state: "Delhi",
  },
  {
    name: "Chhatrapati Shivaji Maharaj International Airport",
    code: "BOM",
    city: "Mumbai",
    state: "Maharashtra",
  },
  {
    name: "Kempegowda International Airport",
    code: "BLR",
    city: "Bengaluru",
    state: "Karnataka",
  },
  {
    name: "Chennai International Airport",
    code: "MAA",
    city: "Chennai",
    state: "Tamil Nadu",
  },
  {
    name: "Netaji Subhas Chandra Bose International Airport",
    code: "CCU",
    city: "Kolkata",
    state: "West Bengal",
  },
  {
    name: "Rajiv Gandhi International Airport",
    code: "HYD",
    city: "Hyderabad",
    state: "Telangana",
  },
  {
    name: "Sardar Vallabhbhai Patel International Airport",
    code: "AMD",
    city: "Ahmedabad",
    state: "Gujarat",
  },
  {
    name: "Cochin International Airport",
    code: "COK",
    city: "Kochi",
    state: "Kerala",
  },
  {
    name: "Goa International Airport",
    code: "GOI",
    city: "Dabolim",
    state: "Goa",
  },
  {
    name: "Jaipur International Airport",
    code: "JAI",
    city: "Jaipur",
    state: "Rajasthan",
  },
];

const FlightSearch = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [cabinClassexpanded, setCabinClassexpanded] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const handlePress = () => setExpanded(!expanded);
  const handlePressCabinClass = () =>
    setCabinClassexpanded(!cabinClassexpanded);
  const handleSelect = value => {
    dispatch({type: 'adults', field: 'adults', value: value});
    setExpanded(false);
  };
  const handleSelectCabinClass = value => {
    dispatch({type: 'cabinClass', field: 'cabinClass', value: value});
    setCabinClassexpanded(false);
  };
  const navigate=useNavigation()
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setExpanded(false);
        setCabinClassexpanded(false);
      }}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical:ms(5)}}>
        <View style={{gap: 10}}>
          <TextInput
            mode="outlined"
            style={{fontSize: 20}}
            value={state.origin}
            onChangeText={text => {
              dispatch({type: 'origin', field: 'origin', value: text});
            }}
            placeholder="Origin"
          />
          <TextInput
            mode="outlined"
            style={{fontSize: 20}}
            value={state.destination}
            onChangeText={text => {
              dispatch({
                type: 'destination',
                field: 'destination',
                value: text,
              });
            }}
            placeholder="Destination"
          />
          <TouchableOpacity>
            <TextInput
              mode="outlined"
              style={{fontSize: 20}}
              value={state.departure}
              onChangeText={text => {
                dispatch({type: 'departure', field: 'departure', value: text});
              }}
              placeholder="Departure"
              editable={false}
              pointerEvents="none"
            />
          </TouchableOpacity>
        </View>
        <List.Section
          style={{
            width: '60%',
            borderWidth:1,
            borderRadius: 6,
            overflow: 'hidden',
          }}
          >
          <List.Accordion
            title={state.adults ? `Adults: ${state.adults}` : 'Adults'}
            // left={props => !selectedValue && <List.Icon {...props} icon="account" color="black" />}
            expanded={expanded}
            onPress={handlePress}
            titleStyle={{fontSize: 20, color: 'black'}}
            description={!state.adults ? '12 Yrs +' : null}
            descriptionStyle={{
              color: 'black',
            }}
            style={{
            // borderWidth: 1,
            // borderRadius: 6,
            // overflow: 'hidden',
            }}
            >
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
          </List.Accordion>
        </List.Section>
        <List.Section
          style={{
            borderWidth:1,
            borderRadius: 6,
            overflow: 'hidden',
          }}>
          <List.Accordion
            title={state.cabinClass}
            expanded={cabinClassexpanded}
            onPress={handlePressCabinClass}
            titleStyle={{fontSize: 20, color: 'black'}}
            // style={{
            //   borderWidth: 1,
            //   borderRadius: 6,
            //   overflow: 'hidden',
            //   }}
            >
          
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
            
          </List.Accordion>
        </List.Section>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Checkbox
            status={state.directFlight ? 'checked' : 'unchecked'}
            onPress={() => {
              dispatch({
                type: 'directFlight',
                field: 'directFlight',
                value: !state.directFlight,
              });
            }}
          />
          <Text variant="headlineSmall">Direct Flights only</Text>
        </View>
        <Button
          mode="contained"
          // onPress={() => console.log(state)}
          onPress={()=>navigate.navigate("FlightList")}
          rippleColor={'white'}
          buttonColor="black"
          dark
          labelStyle={{fontSize: 20}}
          style={{height: ms(50), justifyContent: 'center', marginTop: ms(10)}}
          contentStyle={{height: '100%'}}>
          Search Flight
        </Button>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default FlightSearch;
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import { List, TextInput } from 'react-native-paper';

const FlightSearch = () => {
  const [text, setText] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handlePress = () => setExpanded(!expanded);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setExpanded(false); // Collapse the accordion after selection
  };

  return (
   <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss() ;setExpanded(false)}} >
     <View style={{ padding: 20,flex:1}}>
      <TextInput
        mode="outlined"
        label="Origin"
        type="number"
        style={{ fontSize: 20 }}
        value={text}
        onChangeText={setText}
      />
      <TextInput
        mode="outlined"
        label="Origin"
        type="number"
        style={{ fontSize: 20 }}
        value={text}
        onChangeText={setText}
      />
      <TextInput
        mode="outlined"
        label="Origin"
        type="number"
        style={{ fontSize: 20 }}
        value={text}
        onChangeText={setText}
      />
      <TextInput
        mode="outlined"
        label="Origin"
        type="number"
        style={{ fontSize: 20 }}
        value={text}
        onChangeText={setText}
      />

      <List.Section>
        <List.Accordion
          title={selectedValue ? `Adults: ${selectedValue}` : "Adults"}
          left={props => !selectedValue && <List.Icon {...props} icon="account" color="black" />}
          expanded={expanded}
          onPress={handlePress}
          style={{
            width: "50%",
            backgroundColor: "red",
            borderRadius: 20,
          }}
          titleStyle={{ fontSize: 20, color: "black" }}
          description={!selectedValue ? "12 Yrs +" : null}
          descriptionStyle={{
            color: "black",
          }}
        >
          <View style={{ borderWidth: 1, width: '50%' }}>
            <List.Item title="0" onPress={() => handleSelect("0")} />
            <List.Item title="1" onPress={() => handleSelect("1")} />
          </View>
        </List.Accordion>
      </List.Section>
    </View>
   </TouchableWithoutFeedback>
  );
};

export default FlightSearch;

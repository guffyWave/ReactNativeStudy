import React, {useState} from 'react';

import {View, Text, TouchableOpacity, TextInput} from 'react-native';

function HookCounter4() {
   

  return (
    <View
      style={{
        flexDirection: 'column',
        alignContent: 'center',
        marginTop: 20,
        justifyContent: 'space-around',
      }}>
      <TouchableOpacity onPress={addItem} style={{alignContent: 'center'}}>
        <Text> Add Items </Text>
      </TouchableOpacity>

      {items.map((item) => (
        <Text>
          {item.id}- {item.value}
        </Text>
      ))}
    </View>
  );
}

export default HookCounter4;

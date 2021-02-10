import React, {useState} from 'react';
//hooks are simple functions we call them
import {View, Text, TouchableOpacity} from 'react-native';

// functional component
//we need state variable
//we need setter function to change variable
function HooksCounter() {
  //useState(0);//this hook/function accepts the initial state of the property
  // and returns current value of state property and a` method that is capable of update the sate of that property

  const [count, setCount] = useState(0); //array destructuring
  //value & setterFucntion name can be anything
  // number , setNumber
  // subscribe, enableNotification

  return (
    <View>
      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={{alignContent: 'center', alignSelf: 'center', marginTop: 50}}>
        <Text>Hooks Counter {count} </Text>
      </TouchableOpacity>
    </View>
  );
}

export default HooksCounter;

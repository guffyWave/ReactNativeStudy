import React, {useState} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

function HookCounter2() {
  const initialCount = 0; //unsafe
  const [count, setCount] = useState(initialCount); //array destructuring

  const incrementFive = () => {
    // alert('hello');
    //below will increase the count value by 1 as its reading the state value of count
    for (let i = 0; i < 5; i++) {
      // setCount(count + 1);
      //below we are passing previous state of counter
      //new form of setCount
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 50,
        justifyContent: 'space-around',
      }}>
      <Text>Value {count}</Text>
      <TouchableOpacity
        onPress={() => setCount(initialCount)}
        style={{alignContent: 'center'}}>
        <Text>Reset </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={{alignContent: 'center', alignSelf: 'center'}}>
        <Text>Inc </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCount(count - 1)}
        style={{alignContent: 'center', alignSelf: 'center'}}>
        <Text>Dec </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => incrementFive()}
        style={{alignContent: 'center', alignSelf: 'center'}}>
        <Text>Inc5 </Text>
      </TouchableOpacity>
    </View>
  );
}

export default HookCounter2;

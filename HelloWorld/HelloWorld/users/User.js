import React from 'react';
import {View, Text} from 'react-native';

const User = (props) => {
  let age = props.age ? props.age : 'N.A';
  return (
    <View>
      <Text> 
        Name : {props.children} | Age : {age}
      </Text>
    </View>
  );
}; 

export default User;

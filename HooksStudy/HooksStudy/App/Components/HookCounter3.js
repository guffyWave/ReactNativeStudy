import React, {useState} from 'react';

import {View, Text, TouchableOpacity, TextInput} from 'react-native';

function HookCounter3() {
  const [name, setName] = useState({firstName: '', lastName: ''}); //array destructuring

  //useState doesnot automatically update and merge the object
  //setState will merge the state ,but the setter function of useState will not merge the object
  //and you have to merge manually
  return (
    <View
      style={{
        flexDirection: 'column',
        alignContent: 'center',
        marginTop: 20,
        justifyContent: 'space-around',
      }}>
      <TextInput
        style={{backgroundColor: 'yellow'}}
        value={name.firstName}
        onChangeText={(text) => {
          // setName({firstName: text}); //this will  update the firstName and will remove lastName
          //inorder to merge,use the spread operator
          setName({...name, firstName: text});
        }}></TextInput>
      <TextInput
        style={{backgroundColor: 'yellow'}}
        value={name.lastName}
        onChangeText={(text) => {
          setName({...name, lastName: text}); //this will  update the lastName and will remove firstName
        }}></TextInput>
      <Text>First Name : {name.firstName} </Text>
      <Text>Last Name : {name.lastName} </Text>
      <Text style={{alignSelf: 'center'}}>{JSON.stringify({name})}</Text>
    </View>
  );
}

export default HookCounter3;

import React from 'react';
import {Text} from 'react-native';

export function AppleComponent() {
  console.log('called apple component');
}

export function greetUser() {
  console.log('greet user');
}

export function sayByeUser() {
  console.log('bye user');
}

export const Papaya = () => {
  console.log('papaya users');
  return <Text>Papaya called</Text>;
};

//Arrow functions
export const UserArrowFunc_Mango = () => (
  <Text>Mango from arrow functionx</Text>
);
// need not to write return keyword

export default function MyDefaultComponent() {
  return <Text>My default compoinet</Text>;
}

export const Category = (props) => {
  // how to declare function here?
  // You can declare another arrow function if you want:
  const foo = () => console.log('arrow');

  // Or a standard function
  function bar() {
    console.log('standard');
  }

  // Even a function returning a function :-)
  function baz() {
    return function () {
      console.log('returning function');
    };
  }

  const renderCustomComponent = () => <div>____</div>;

  return (
    <View>
      <ListView
        dataSource={ds}
        renderRow={(rowData) => <Text>{rowData}</Text>}
        renderSeparator={renderCustomComponent}
      />
    </View>
  );
};

export function getPhone(modelName) {
  // <-- function
  function getSimCard(phoneNumber) {
    // <-- inner function
    return modelName + phoneNumber; // <-- use variables from outer scope
  }
  return getSimCard; // <-- you can even return a function.
}


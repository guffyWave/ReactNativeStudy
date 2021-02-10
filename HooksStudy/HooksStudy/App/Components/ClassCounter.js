import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setState({counter: this.state.counter + 1});
          }}
          style={{alignContent: 'center', alignSelf: 'center', marginTop: 20}}>
          <Text>Counter {this.state.counter}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ClassCounter;

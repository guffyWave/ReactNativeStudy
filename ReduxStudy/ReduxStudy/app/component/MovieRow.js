import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class MovieRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flexDirection: 'row', margin: 5}}>
        <Image
          style={{height: 100, width: 50}}
          source={{uri: this.props.movie.Poster}}
        />
        <Text>{this.props.movie.Title}</Text>
      </View>
    );
  }
}

export default MovieRow;

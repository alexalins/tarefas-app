import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Input from './Input';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View>
            <Input />
        </View>
      </View>
    );
  }
}

export default Form;

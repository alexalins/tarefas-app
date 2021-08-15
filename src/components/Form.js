import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Input from './Input';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text: ''
    };
  }

  onChangeText(text) {
      this.setState({
        text
      });
  }

  onPress() {
    console.log(this.state.text)
  }

  render() {
    const { text } = this.state;
    return (
      <View style={style.formContainer}>
        <View  style={style.inputContainer}>
            <Input onChangeText={text => this.onChangeText(text)} value={text}/>
        </View>
        <View  style={style.buttonContainer}>
            <Button title='add' onPress={() => this.onPress()}/>
        </View>
      </View>
    );
  }
}

export default Form;

const style = StyleSheet.create({
    formContainer: {
        flexDirection: 'row'
    },
    inputContainer: {
        flex: 4
    },
    buttonContainer: {
        flex: 1
    }
});
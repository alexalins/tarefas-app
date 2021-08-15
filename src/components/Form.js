import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
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
    this.props.dispatchAddTodo(this.state.text);
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

const mapDispatchToProps = {
    dispatchAddTodo: addTodo
}

export default connect(null, mapDispatchToProps)(Form);

const style = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        paddingTop: 30
    },
    inputContainer: {
        flex: 4,
        paddingLeft: 10 
    },
    buttonContainer: {
        flex: 1
    }
});
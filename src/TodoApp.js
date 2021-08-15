import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Form from './components/Form';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Form />
      </View>
    );
  }
}

export default TodoApp;

const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    }
})
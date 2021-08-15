import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({onChangeText, value}) => (
    <TextInput 
        style={style.input}
        onChangeText={onChangeText}
        value={value}
        underlineColorAndroid='#000' />
);

export default Input;

const style = StyleSheet.create({
    input: {
        paddingLeft: 15,
        paddingBottom: 15
    }
});
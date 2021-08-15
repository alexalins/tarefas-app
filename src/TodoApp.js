import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//
import Form from './components/Form';
import rootReducer from './reducers';

const store = createStore(rootReducer);

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Form />
                </View>
            </Provider>
        );
    }
}

export default TodoApp;

const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    }
})
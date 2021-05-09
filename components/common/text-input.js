import React from 'react';
import { StyleSheet, TextInput as RNTextInput, View } from 'react-native';

export default TextInput = (props) => {
    return (
        <View style={styles.container}>
            <RNTextInput style={styles.textInput}
                clearButtonMode='while-editing'
                onChangeText={props.onChangeText} />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {

    },
    textInput: {
        borderColor: 'grey',
        borderWidth: 1,
        height: 32,
        width: 250,
        padding: 4
    }
});
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextInputLabel from './text-input-label';
import TextInput from './text-input';

export default TextField = (props) => {
    return (
        <View style={styles.textFieldContainer}>
            <TextInputLabel label={props.label} />
            <TextInput onChangeText={props.onChangeText} />
        </View>
    )
};

const styles = StyleSheet.create({
    textFieldContainer: {
        margin: 8
    }
});
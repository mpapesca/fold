import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextField from '../common/text-field';

export default AuthForm = () => {
    return (
        <View>
            <TextField label='Email' />
            <TextField label='Pssword' />
        </View>
    );
};

const styles = StyleSheet.create({

});
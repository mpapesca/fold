import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import * as firebase from 'firebase';
import { register, signIn, signOut } from '../../API/firebaseMethods';
import TextField from '../../components/common/text-field';

export default SignInScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <View style={styles.container}>
            <Text>{firebase.auth().currentUser != null ? 'Logged In' : 'Logged Out'}</Text>
            <Text style={styles.title}>Register</Text>
            <TextField label='Email' onChangeText={(text) => setEmail(text)} />
            <TextField label='Password' onChangeText={(text) => setPassword(text)} />
            <TextField label='First Name' onChangeText={(text) => setFirstName(text)} />
            <TextField label='Last Name' onChangeText={(text) => setLastName(text)} />
            <View style={styles.buttonGroup}>
                <Button
                    onPress={() => register(email, password, firstName, lastName)}
                    title='Sign Up'
                />
                <Button
                    onPress={() => signIn(email, password)}
                    title='Sign In'
                />
                <Button
                    onPress={() => signOut()}
                    title='Sign Out'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 36
    },
    buttonGroup: {
        flexDirection: 'row'
    }
});
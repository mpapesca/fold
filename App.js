import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as firebase from 'firebase';
import apiKeys from './config/keys';
import { register, signIn, signOut } from './API/firebaseMethods';

// Initialize firebase if it hasn't been initialized yet
if (!firebase.apps.length) {
  console.log('Initializing Firebase')
  firebase.initializeApp(apiKeys.firebaseConfig);
}

export default App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextField label='Email' onChangeText={(text) => setEmail(text)} />
      <TextField label='Password' onChangeText={(text) => setPassword(text)} />
      <TextField label='First Name' onChangeText={(text) => setFirstName(text)} />
      <TextField label='Last Name' onChangeText={(text) => setLastName(text)} />
      <View style={styles.buttonGroup}>
        <Button
          onPress={() => register(email, password, firstName, lastName)}
          title='Sign Up'
          color='black'
        />
        <Button
          onPress={() => signIn(email, password)}
          title='Sign In'
          color='black'
        />
        <Button
          onPress={() => signOut()}
          title='Sign Out'
          color='black'
        />
      </View>
    </View>
  );
};

export const TextField = (props) => {
  return (
    <View style={styles.textFieldContainer}>
      <Text style={styles.textFieldLabel}>{props.label}</Text>
      <TextInput style={styles.textFieldInput}
        clearButtonMode='while-editing'
        onChangeText={props.onChangeText} />
    </View>
  )
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
  textFieldContainer: {
    margin: 8
  },
  textFieldInput: {
    borderColor: 'grey',
    borderWidth: 1,
    height: 32,
    width: 250,
    padding: 4
  },
  textFieldLabel: {
    fontSize: 16
  },
  button: {
    borderColor: 'black',
    borderWidth: 1
  },
  buttonText: {
    fontSize: 16
  },
  buttonGroup: {
    flexDirection: 'row'
  }
});

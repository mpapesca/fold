import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import apiKeys from './config/keys';
import SignInScreen from './screens/auth/sign-in-screen';

// Initialize firebase if it hasn't been initialized yet
if (!firebase.apps.length) {
	console.log('Initializing Firebase')
	firebase.initializeApp(apiKeys.firebaseConfig);
}

const AuthStack = createStackNavigator();

export default App = () => {

	return (
		<NavigationContainer>
			<AuthStack.Navigator>
				<AuthStack.Screen name="SignIn" component={SignInScreen} />
			</AuthStack.Navigator>
		</NavigationContainer>
	);
};

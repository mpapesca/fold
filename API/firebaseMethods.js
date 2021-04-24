import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";

export async function register(email, password, lastName = '', firstName = '') {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;

        const db = firebase.firestore();
        db.collection("users")
            .doc(currentUser.uid)
            .set({
                email: currentUser.email,
                lastName: lastName,
                firstName: firstName,
            });
        Alert.alert('Signed up');
    } catch (err) {
        Alert.alert('Could not sign up', err.message);
    }
}

export async function signIn(email, password) {
    try {
        await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
        Alert.alert('Signed in');
    } catch (err) {
        Alert.alert('Could not sign in', err.message);
    }
}

export async function signOut() {
    try {
        await firebase.auth().signOut();
        Alert.alert('Signed out');
    } catch (err) {
        Alert.alert('Could not sign out', err.message);
    }
}
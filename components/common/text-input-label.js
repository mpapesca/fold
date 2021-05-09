import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default TextInputLabel = ({ label }) => {
    return (
        <Text styles={styles.textInputLabel}>{label}</Text>
    );
};

const styles = StyleSheet.create({
    textInputLabel: {
        fontSize: 16
    }
});
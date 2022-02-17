import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Theme from '../constants/Theme';

export function InputLogin({ onChangeEmail, onChangePassword }) {

    return (
        <View style={inputStyles.inputView}>
            <TextInput
            style={inputStyles.input}
            placeholder="Email"
            placeholderTextColor={Theme.COLORS.Gray}
            color={Theme.COLORS.White}
            onChangeText={ onChangeEmail }
            />
            <TextInput
            style={inputStyles.input}
            placeholder="Password"
            placeholderTextColor={Theme.COLORS.Gray}
            color={Theme.COLORS.White}
            secureTextEntry
            onChangeText={ onChangePassword }
            />
        </View>
    );
}

const inputStyles = StyleSheet.create({
    inputView: {
        marginTop: -250,
        width: '70%',
        alignItems: 'center',
    },
    
    input: {
        width: '90%',
        marginTop: '5%',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: Theme.COLORS.Gray,
        padding: 15,
    },
});
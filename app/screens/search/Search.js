import React from 'react';
import { StyleSheet, Button, Text, View, StatusBar, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FlatButton from '../../components/Button.js';

export function SearchPage({ navigation }) {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <View style={styles.no_account}>
                    <Text style={{ color: '#9B9B9B' }}>
                        Search Page:
                        <Text style={{ color: '#fff' }} onPress={() => navigation.navigate('Home')} > Click here</Text>
                    </Text>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#161616',
        justifyContent: 'center',
        alignItems: 'center',
    },

    baseText: {
        color: '#3068DE',
        fontFamily: 'Arial',
    },

    inputView: {
        marginTop: -250,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',

    },

    input: {
        width: '90%',
        marginTop: '5%',
        backgroundColor: '#272B3E',
        borderRadius: 15,
        padding: 15,
    },

    no_account: {
        marginTop: '55%',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
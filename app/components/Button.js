import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <LinearGradient 
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 1.0, y: 0.0 }}
                    colors={['#fC466B', '#3f5EFB']} 
                    style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
                </LinearGradient>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        paddingVertical: 16,
        paddingHorizontal: 100,

    },

    buttonText: {
        width: '100%',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 19,
        textAlign: 'center',
        color: '#fff',
        
    }

})
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import RNPickerSelect from "react-native-picker-select";

export default function PickerTest({ itemList, placeholderTest }) {
    const [ school, setSchool ] = useState("");
    return (
        <View style={styles.container}>            
            <RNPickerSelect
                placeholder={placeholderTest}
                onValueChange={(school) => setSchool(school)}
                items={itemList}
                style={styles}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '68%',
        marginBottom: 45,
    },

    inputIOS: {
        fontSize: 16,
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'gray',
        color: 'white',
        textAlign: 'center',
    },

});

// const pickerSelectStyles = StyleSheet.create({
//     inputIOS: {
//         width: '100%',
//         fontSize: 16,
//         paddingVertical: 16,
//         paddingHorizontal: 50,
//         borderRadius: 25,
//         borderWidth: 1,
//         borderColor: 'gray',
//         color: 'white',
//         justifyContent: 'center', 
//         alignItems: 'center',
//     },
// });
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import RNPickerSelect from "react-native-picker-select";

export default function PickerTest({ text, onPress }) {
    const [ school, setSchool ] = useState("");
    return (
        <View style={styles.container}>            
            <RNPickerSelect
                placeholder={{ label: "Selecteer school...", value: null }}
                onValueChange={(school) => setSchool(school)}
                items={[
                    { label: "Regio College Zaandam", value: "RC" },
                    { label: "Mediacollege Amsterdam", value: "MA" },
                    { label: "Hogeschool van Amsterdam", value: "HVA" },
                ]}
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
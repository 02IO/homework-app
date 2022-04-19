import React from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Styles';
import { AuthContext } from "../../routes/Context.js";
import FlatButton from '../../components/Button.js';
import Theme from '../../constants/Theme';
import FlashCard from '../../components/FlashCard.js';

export function FlashCardScreen({ navigation }) {
    return (
    <>
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
            <View style={ styles.top } >
                <Image style={styles.hamburgerStyle} source={ Icons.hamburger_menu_icon } />

                <View style={ styles.scoreTracker }>
                    <Text style={ styles.scoreText }>
                        000/500
                    </Text>
                </View>  
            </View>

            <View style={ styles.middle } >
            </View>

            <View style={ styles.bottom }>
                <FlashCard/>
            </View>

        </SafeAreaView>
    </>
  );
};
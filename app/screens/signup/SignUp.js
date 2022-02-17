import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatButton from '../../components/Button.js';
import Images from '../../constants/Images';
import Animation from '../../constants/Animation';
import LottieView from 'lottie-react-native';
// import Lottie from 'lottie-react-native';
import Theme from '../../constants/Theme';
import { Picker } from "@react-native-picker/picker";
import RNPickerSelect from "react-native-picker-select";
import PickerTest from "../../components/PickerTest.js";


export function SignUpScreen1({ navigation }) {
    return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Naar welke school ga je?</Text>
            <LottieView
              style={styles.animationStyle}
              source={Animation.school_animation}
              autoPlay
              loop
            />

          <PickerTest/>
          
          <FlatButton text='Next' onPress={() => navigation.navigate('SignUp2')} />
      </SafeAreaView>
    </>
  );
};

export function SignUpScreen2({ navigation }) {
    return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welke opleiding volg je?</Text>
            <LottieView
              style={styles.animationStyle}
              source={Animation.programming_animation}
              autoPlay
              loop
            />

          <PickerTest/>
        
          <FlatButton text='Next' onPress={() => navigation.navigate('SignUp3')} />
      </SafeAreaView>
    </>
  );
};

export function SignUpScreen3({ navigation }) {
    return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welk niveau doe je?</Text>
            <LottieView
              style={styles.animationStyle}
              source={Animation.programming_animation}
              autoPlay
              loop
            />

          <PickerTest/>
      
          <FlatButton text='Next' onPress={null} />
      </SafeAreaView>
    </>
  );
};




const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Theme.COLORS.Background,
    justifyContent: 'center', 
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    marginBottom: 20,
    fontSize: 30,
  },

  animationStyle: {
    height: 350,
    width: 350,
    marginBottom: 20,
  }
});

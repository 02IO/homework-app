import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatButton from '../../components/Button.js';
import Images from '../../constants/Images';
import Animation from '../../constants/Animation';
import LottieView from 'lottie-react-native';
import PickerTest from "../../components/PickerTest.js";
import { styles } from './Styles.js';
import { stylesRegister } from './RegisterStyles.js';

const schoolList = {
    itemList:
    [
        { label: "Regio College Zaandam", value: "RC" },
        { label: "Mediacollege Amsterdam", value: "MA" },
        { label: "Hogeschool van Amsterdam", value: "HVA" },
    ],
    myPlaceholder: {
        label: "Selecteer school...", value: null
    }
};

const opleidingList = {
  itemList:
  [
      { label: "Software Developer", value: "SD" },
      { label: "IT Systems & Devices", value: "IT" },
      { label: "Automonteur", value: "gay" },
  ],
  myPlaceholder: {
      label: "Selecteer opleiding...", value: null
  }
};

const niveauList = {
  itemList:
  [
      { label: "Niveau 2", value: "N2" },
      { label: "Niveau 3", value: "N3" },
      { label: "Niveau 4", value: "N4" },
  ],
  myPlaceholder: {
      label: "Selecteer niveau...", value: null
  }
};

// const itemList2 = 
// [  
//     { label: "Software Developer", value: "SD" },
//     { label: "IT Systems & Devices", value: "IT" },
//     { label: "Automonteur", value: "gay" },
// ];

export function SignUpScreen1({ navigation }) {
    return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={ styles.top } >
          <Text style={styles.title}>Selecteer uw school</Text>
      </View>
      <View style={ styles.middle } >
          <LottieView style={styles.animationStyle} source={Animation.school_animation} autoPlay loop />
      </View>
      <View style={ styles.bottom } >
          <PickerTest style={styles.pickerStyle} itemList={ schoolList.itemList } placeholderTest={schoolList.myPlaceholder} />
        
          <FlatButton text='Next' onPress={() => navigation.navigate('SignUp2')} />

      </View>
    </SafeAreaView>
    </>
  );
};

export function SignUpScreen2({ navigation }) {
    return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={ styles.top } >
          <Text style={styles.title}>Selecteer uw opleiding</Text>
      </View>
      <View style={ styles.middle } >
          <LottieView style={styles.animationStyle} source={Animation.programming_animation} autoPlay loop />
      </View>
      <View style={ styles.bottom } >
          <PickerTest style={styles.pickerStyle} itemList={ opleidingList.itemList } placeholderTest={ opleidingList.myPlaceholder } />
        
          <FlatButton text='Next' onPress={() => navigation.navigate('SignUp3')} />

      </View>
    </SafeAreaView>
    </>
  );
};

export function SignUpScreen3({ navigation }) {
    return (
      <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={ styles.top } >
          <Text style={styles.title}>Selecteer niveau</Text>
      </View>
      <View style={ styles.middle } >
          <LottieView style={styles.animationStyle} source={Animation.stacking_animation} autoPlay loop />
      </View>
      <View style={ styles.bottom } >
          <PickerTest style={styles.pickerStyle} itemList={ niveauList.itemList } placeholderTest={ niveauList.myPlaceholder } />
        
          <FlatButton text='Next' onPress={() => navigation.navigate('SignUp4')} />

      </View>
    </SafeAreaView>
    </>
  );
};

export function SignUpScreen4({ navigation }) {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <SafeAreaView style={[styles.container, {
    // Try setting `flexDirection` to `"row"`.
    flexDirection: "column"
  }]}>
    <View>

    </View>
  </SafeAreaView>
  </>
);
};


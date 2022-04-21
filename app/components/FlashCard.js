import React from 'react';
import Theme from '../constants/Theme';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Animated, Dimensions } from 'react-native';
import FlipCard from 'react-native-flip-card';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FlashCard(){
    return (
        <FlipCard style={styles.card} flipHorizontal={false} clickable={true} onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}} >
          {/* Face Side */}
          <View style={styles.face}>

            <View style={ styles.bottomUp }>
                <Text style={ styles.title }>Variables</Text>

                <Text style={ styles.h2 }>/ˈvɛːrɪəb(ə)l/</Text>

                <Text style={ styles.h2 }>What is a variable?</Text>
            </View>

            <View style={ styles.bottomMid }>
            </View>

            <View style={ styles.bottomDown }>
                <Text style={ styles.h2 }>Flip for answer</Text>    
            </View>
          </View>
          {/* Back Side */}
          <View style={styles.back}>
              
            <View style={ styles.bottomUp }>
                <Text style={ styles.title }>Variables</Text>

                <Text style={ styles.h2 }>/ˈvɛːrɪəb(ə)l/</Text>

                <Text style={ styles.h2 }>What is a variable?</Text>
            </View>

            <View style={ styles.bottomMid }>
                <Text style={ styles.h2 }>Variables are containers for {"\n"} storing data values.</Text> 

                <Text style={ styles.h2 }>A variable is created the moment {"\n"} you first assign a value to it.</Text> 
            </View>

            <View style={ styles.bottomDown }>
                <Text style={ styles.h2 }>Very hard | Hard | Easy | Very Easy</Text> 
            </View>
          </View>
        </FlipCard>
    );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  card: {
    borderRadius: 40,
    backgroundColor: Theme.COLORS.Slate,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.85,
  },

  flipText: {
    width: 90,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  baseText: {
    color: '#fff',
    fontFamily: 'System',
  },

  title: {
    color: '#fff',
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: 40,
    justifyContent: 'center', 
    alignSelf: 'flex-start',
  },

  h2: {
    color: '#fff',
    fontFamily: 'System',
    fontSize: 15,
    justifyContent: 'center', 
    alignSelf: 'flex-start',
  },

  bottomUp: {
    flex: 0.4,
    //backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.7,
  },

  bottomMid: {
    flex: 0.3,
    //backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent:'space-between',
  },

  bottomDown: {
    flex: 0.4,
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

AppRegistry.registerComponent('animatedbasic', () => animatedbasic);
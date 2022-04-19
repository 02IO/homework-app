import React from 'react';
import Theme from '../constants/Theme';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import FlipCard from 'react-native-flip-card';

export default function FlashCard(){
    return (
        <FlipCard style={styles.card} flipHorizontal={false} clickable={true} onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}} >
          {/* Face Side */}
          <View style={styles.face}>

            <View style={ styles.bottomUp }>
                <Text style={ styles.title }>
                    Variables
                </Text>

                <Text style={ styles.h2 }>
                    /ˈvɛːrɪəb(ə)l/
                </Text>

                <Text style={ styles.h2 }>
                    What is a variable?
                </Text>
            </View>

            <View style={ styles.bottomMid }>
            </View>

            <View style={ styles.bottomDown }>
                <Text style={ styles.h2 }>
                    Flip for answer
                </Text>
                    
            </View>
          </View>
          {/* Back Side */}
          <View style={styles.back}>
              
            <View style={ styles.bottomUp }>
                <Text style={ styles.title }>
                    Variables
                </Text>

                <Text style={ styles.h2 }>
                    /ˈvɛːrɪəb(ə)l/
                </Text>

                <Text style={ styles.h2 }>
                    What is a variable?
                </Text>
            </View>

            <View style={ styles.bottomMid }>
            </View>

            <View style={ styles.bottomDown }>
                <Text style={ styles.h2 }>
                    A variable.A variable.
                </Text>
                    
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
    width: '850%',
    //height: '100%',
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
    marginTop: '15%',
    marginLeft: '5%',
  },

  h2: {
    color: '#fff',
    fontFamily: 'System',
    marginTop: '4%',
    fontSize: 15,
    marginLeft: '7%',
  },

  bottomUp: {
    flex: 0.5,
  },

  bottomMid: {
    flex: 0.2,
  },

  bottomDown: {
    flex: 0.3,
  },

});

AppRegistry.registerComponent('animatedbasic', () => animatedbasic);
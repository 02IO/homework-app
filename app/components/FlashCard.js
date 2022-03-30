import React, { Component } from 'react';
import Theme from '../constants/Theme';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

export default class FlashCard extends Component {
  UNSAFE_componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    })
    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
    })
  }

  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue,{
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue,{
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }

  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate }
      ]
    }
    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    }

    return (
        <View style={styles.container}>
            <View>
            <TouchableOpacity onPress={() => this.flipCard()}>
                <Animated.View style={[styles.flipCard, frontAnimatedStyle, {opacity: this.frontOpacity}]}>
                    <View style={ styles.card }>
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

                    <View style={ styles.bottomDown }>
                        <Text style={ styles.h2 }>
                        Flip for answer
                        </Text>
                    </View>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle, {opacity: this.backOpacity}]}>
                <View style={ styles.card }>
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


                    <View style={ styles.bottomDown }>
                        <Text style={ styles.h2 }>
                        Very hard | Hard | Easy | Very easy
                        </Text>
                    </View>
                    </View>
                </Animated.View>

            </TouchableOpacity>
            </View>
        </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
      borderRadius: 40,
      backgroundColor: Theme.COLORS.Slate,
      width: '180%',
      //height: '100%',
  },

  flipCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    
  },
  flipCardBack: {
    position: "absolute",
    top: 0,
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
    

},

bottomMid: {
    padding: 10,
},

bottomDown: {
    marginTop: 200,

},
});

AppRegistry.registerComponent('animatedbasic', () => animatedbasic);
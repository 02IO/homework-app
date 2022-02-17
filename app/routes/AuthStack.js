import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/login/Login';
import { SignUpScreen1, SignUpScreen2, SignUpScreen3 } from '../screens/signup/SignUp.js';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp1" component={SignUpScreen1} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp2" component={SignUpScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp3" component={SignUpScreen3} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
};
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuth } from './AuthContextData.js';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import DrawerNavigator from '../navigation/Drawer.js';

export function Router({ navigation }) {
    const {userData, loading} = useAuth();

    if(loading) {
        return <Text>NOW LOADING...</Text>
    }

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {userData?  <DrawerNavigator/> : <AuthStack/> }
            </NavigationContainer>
        </SafeAreaProvider>
    );
};
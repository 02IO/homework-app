import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../navigation/Drawer.js'
import Tabs from '../navigation/Tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function AppStack({ navigation }) {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: { marginLeft: -25, fontFamily: 'System', fontSize: 15, },
            }}>
            <Drawer.Screen
                name="Home"
                component={Tabs}
                options={{ drawerIcon: ({color}) => ( <Ionicons name="home-outline" size={22} color={color}/> ) }}
            />
            <Drawer.Screen
                name="Profile"
                component={Tabs}
                options={{ drawerIcon: ({color}) => ( <Ionicons name="person-outline" size={22} color={color}/> ) }}
            />
            <Drawer.Screen
                name="Settings"
                component={Tabs}
                options={{ drawerIcon: ({color}) => ( <Ionicons name="chatbox-ellipses-outline" size={22} color={color}/> ) }}
            />
            <Drawer.Screen
                name="Moments"
                component={Tabs}
                options={{ drawerIcon: ({color}) => ( <Ionicons name="timer-outline" size={22} color={color}/> ) }}
            />
        </Drawer.Navigator>
    );
}
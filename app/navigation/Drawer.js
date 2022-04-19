import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Tabs from './Tabs.js';
import Icons from '../constants/Icons';
import Images from '../constants/Images';
import Theme from '../constants/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }) {
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

function CustomDrawer( props ) {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: Theme.COLORS.Background }} >

                <View style={styles.profileStyle}>
                    <Image source={Images.user_profile_image} style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }} />
                    <Text style={styles.textStyle}>John Doe</Text>
                </View>

                <View style={styles.drawerItemStyle}>
                    <DrawerItemList {...props} />
                </View>

            </DrawerContentScrollView>

            <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#fff'}}>

                <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="share-social-outline" size={22} />
                        <Text style={styles.textStyle}>Tell a Friend</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text style={styles.textStyle}>Sign Out</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.COLORS.Background,
    },

    textStyle: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'System',
        marginBottom: 5
    },

    drawerItemStyle: {
        flex: 1,
        backgroundColor: Theme.COLORS.Background,
        paddingTop: 10
    },
    
    profileStyle: {
        marginLeft: '5%',
    }

});
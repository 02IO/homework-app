import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Images from '../constants/Images';
import Theme from '../constants/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CustomDrawer( props ) {
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
    },

});
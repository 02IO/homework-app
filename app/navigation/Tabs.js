import React from 'react';
import { StyleSheet, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage } from '../screens/home/Home.js';
import { SearchPage } from '../screens/search/Search.js';
import Icons from '../constants/Icons';
import Theme from '../constants/Theme';

const Tab = createBottomTabNavigator();

export default function Tabs({ navigation }) {
    return (
      <Tab.Navigator screenOptions={({ route }) => ({ tabBarStyle: { ...tabStyle.bar }, tabBarShowLabel: false, headerShown: false,
        tabBarIcon: ({ focused }) => {
            const tintColor = focused ? Theme.COLORS.White : Theme.COLORS.Gray;
            switch (route.name) {
                case "Home":
                    return (
                        <Image
                            source={Icons.home_icon}
                            resizeMode="contain"
                            style={{
                                tintColor: tintColor,
                                width: 25,
                                height: 25
                            }}
                        /> 
                    ) 

                case "Search":
                    return (
                        <Image
                            source={Icons.search_icon}
                            resizeMode="contain"
                            style={{
                                tintColor: tintColor,
                                width: 25,
                                height: 25
                            }}
                        />
                    )

                case "Notification":
                    return (
                        <Image
                            source={Icons.notification_icon}
                            resizeMode="contain"
                            style={{
                                tintColor: tintColor,
                                width: 25,
                                height: 25
                            }}
                        />
                    )

                case "Setting":
                    return (
                        <Image
                            source={Icons.chat_icon}
                            resizeMode="contain"
                            style={{
                                tintColor: tintColor,
                                width: 25,
                                height: 25
                            }}
                        />
                    )
            }
        }
    }) }
>
    <Tab.Screen
        name="Home"
        component={HomePage}
    />
    <Tab.Screen
        name="Search"
        component={SearchPage}
    />
    <Tab.Screen
        name="Notification"
        component={HomePage}
    />
    <Tab.Screen
        name="Setting"
        component={HomePage}
    />
</Tab.Navigator>
)}

const tabStyle = StyleSheet.create({
  bar: {
      backgroundColor: '#161616', 
      borderTopWidth: 0,
      height: '10%',
  },

})
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForumDetail } from '../screens/forum/Forum.js';
import Tabs from '../navigation/Tabs';

const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="ForumDetail" component={ForumDetail} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
};
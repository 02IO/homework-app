import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForumDetail } from '../screens/forum/Forum.js';
import { FlashCardScreen } from '../screens/flashcards/Flashcards.js';
import Tabs from '../navigation/Tabs';
import DrawerNavigator from '../navigation/Drawer.js';

const Stack = createNativeStackNavigator();

export default function AppStack({ navigation }) {
    return (
      <DrawerNavigator>
        
      </DrawerNavigator>
    );
};

//<Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
//<Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
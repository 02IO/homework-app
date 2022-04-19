import 'react-native-gesture-handler';

import React from 'react';
import { Text } from 'react-native';
import { AuthProvider } from './app/routes/AuthContextData.js';
import { Router } from './app/routes/Router.js'

export default function App({ navigation }) {

    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return <Text>Now Loading...</Text>;
    }

    return (
        <AuthProvider>
            <Router/>
        </AuthProvider>
    );
};
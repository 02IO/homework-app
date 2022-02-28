import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SignUpScreen1, SignUpScreen2, SignUpScreen3, SignUpScreen4 } from './app/screens/signup/SignUp'
import { AuthContext } from './app/routes/Context.js';
import AppStack from './app/routes/AppStack.js';
import AuthStack from './app/routes/AuthStack.js';
import loginFunction from './app/routes/AuthService';

export default function App({ navigation }) {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      async signIn(_email, _password) {
        setIsLoading(false);
        const myToken = await loginFunction(_email, _password);
        setUserToken(myToken);
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Text>Now Loading...</Text>;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaProvider>
        <NavigationContainer>
            {userToken == null ? <AuthStack/> : <AppStack/>}
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
}
import React from 'react';
import { Text, View, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Styles';
import { InputLogin } from '../../components/InputLogin.js';
import { AuthContext } from "../../routes/Context.js";
import FlatButton from '../../components/Button.js';
import Theme from '../../constants/Theme';

export function LoginScreen({navigation}) {
    const { signIn } = React.useContext(AuthContext);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView style={styles.container}>
          <View style={styles.logo}>
            <Image style={styles.logo} source={require('../../assets/skynote.png')} />
          </View>

          <InputLogin 
            onChangeEmail={setEmail} 
            onChangePassword={setPassword} 
          />

          <View style={styles.button_password}>
            <FlatButton text='Sign In' onPress={ () => signIn(email, password) }/>
            <Text style={styles.forgotPassword} onPress={() => navigation.navigate('SignUp1')} >Forgot password? </Text>
          </View>
          <View style={styles.noAccount}>
            <Text style={{color: Theme.COLORS.Gray}}>
              Don't have an account?  
              <Text style={{color: Theme.COLORS.White}}  onPress={() => navigation.navigate('SignUp1')} > Sign up here</Text>
            </Text>
          </View>
      </SafeAreaView>
    </>
  );
}
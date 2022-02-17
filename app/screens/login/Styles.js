import { StyleSheet } from 'react-native';
import Theme from '../../constants/Theme';

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: Theme.COLORS.Background,
      justifyContent: 'center', 
      alignItems: 'center',
    },

    baseText: {
      color: '#3068DE',
      fontFamily: 'System',
    },

    logo: {
      marginTop: '-40%',
      justifyContent: 'center', 
      alignItems: 'center',
      resizeMode: 'contain',
      width: '80%',
      height: '80%',
    },

    button_password: {
      marginTop: '15%',
      justifyContent: 'center', 
      alignItems: 'center',
    },

    forgotPassword: {
      color: Theme.COLORS.Gray,
      fontFamily: 'System',
      marginTop: 20,
      fontSize: 17,
    },

    noAccount: {
      marginTop: '55%',
      justifyContent: 'center', 
      alignItems: 'center',
    },
});

export { styles }
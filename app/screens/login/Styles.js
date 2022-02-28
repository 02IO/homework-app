import { StyleSheet } from 'react-native';
import Theme from '../../constants/Theme';

const styles = StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: "column",
      padding: 20,
      backgroundColor: Theme.COLORS.Background,
    },

    baseText: {
      color: '#3068DE',
      fontFamily: 'System',
    },

    top: {
      flex: 1,
      //backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },

    middleTop: {
      flex: 0.8,
      //backgroundColor: 'orange',
      justifyContent: 'center',
      alignItems: 'center',
    },

    middleBottom: {
      flex: 0.5,
      //backgroundColor: 'pink',
      //justifyContent: 'center',
      alignItems: 'center',
    },


    bottom: {
      flex: 1,
      //backgroundColor: 'blue',
      justifyContent: 'flex-end',
      alignItems: 'center', 
    },

    logo: {
      resizeMode: 'contain',
      width: '80%',
      height: '80%',
    },

    forgotPassword: {
      color: Theme.COLORS.Gray,
      fontFamily: 'System',
      fontSize: 17,
    },
    // logo: {
    //   flex: 1,
    //   resizeMode: 'contain',
    //   width: '80%',
    //   height: '80%',
    // },

    // button_password: {
    //   flex: 1,
    //   justifyContent: 'center', 
    //   alignItems: 'center',
    // },

    // forgotPassword: {
    //   flex: 1,
    //   color: Theme.COLORS.Gray,
    //   fontFamily: 'System',
    //   //marginTop: 20,
    //   fontSize: 17,
    // },

    // noAccount: {
    //   flex: 1,
    //   //marginTop: '55%',
    //   justifyContent: 'center', 
    //   alignItems: 'center',
    // },
});

export { styles }
import { StyleSheet } from 'react-native';
import Theme from '../../constants/Theme';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Theme.COLORS.Background,
    },

    top: {
        flex: 0.5,
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },

    middle: {
        flex: 2.5,
        //backgroundColor: 'orange',
        //justifyContent: 'center',
        alignItems: 'center',
    },

    bottom: {
        flex: 2,
        //backgroundColor: 'green',
        alignItems: 'center',
        //marginTop: '15%',
        
    },

    title: {
      color: '#fff',
      fontSize: 30,
    },
  
    animationStyle: {
      height: 350,
      width: 350,
      //backgroundColor: 'blue',
    },

    pickerStyle: {
        marginTop: '50%',
    }
});

    
export { styles }
import { StyleSheet } from 'react-native';
import Theme from '../../constants/Theme';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Theme.COLORS.Background,
    },

      top: {
        flex: 0.8,
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },

    topBottom: {
        flex: 0.6,
        //backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },

    middleTop: {
        flex: 2.2,
        //backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
    },

    middle: {
        flex: 0.6,
        //backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // middleBottom: {
    //     flex: 2.5,
    //     backgroundColor: 'pink',
    //     alignItems: 'center',
    // },

    bottom: {
        flex: 5,
        //backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    baseText: {
        color: '#fff',
        fontFamily: 'System',
        fontWeight: '600',
        fontSize: 23,
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },
    
    hamburgerStyle: {
        width: 30,
        height: 30,
        alignSelf: 'flex-start',
    },
    
      h2: {
        color: '#fff',
        fontFamily: 'System',
        fontWeight: '600',
        fontSize: 20,
        justifyContent: 'center', 
        alignSelf: 'flex-start',
      },
});

export { styles }
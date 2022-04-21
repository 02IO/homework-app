import { StyleSheet } from 'react-native';
import Theme from '../../constants/Theme';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Theme.COLORS.Background,
    },

    baseText: {
        color: '#fff',
        fontFamily: 'System',
    },

    title: {
        color: '#fff',
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: 40,
    },

    h2: {
        color: '#fff',
        fontFamily: 'System',
        fontWeight: '600',
        fontSize: 20,
        justifyContent: 'center', 
        alignSelf: 'flex-start',
    },

    hamburgerStyle: {
        width: 30,
        height: 30,
        alignSelf: 'flex-start',
    },

    scoreTracker: {
        alignSelf: 'flex-end',
    },
    
    scoreText: {
        color: '#fff',
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: 40,

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
        flex: 1.2,
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
        flex: 6,
        //backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});

    
export { styles }
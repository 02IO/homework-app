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
        marginTop: '15%',
        marginLeft: '5%',
    },

    h2: {
        color: '#fff',
        fontFamily: 'System',
        marginTop: '4%',
        fontSize: 15,
        marginLeft: '7%',
    },

    hamburger: {
        resizeMode: 'contain',
        width: '16%',
        height: '16%',
        marginBottom: '30%',
        marginRight: '80%',
    },

    scoreTracker: {

        marginLeft: '50%',
        position: 'absolute',
    },
    
    scoreText: {
        color: '#fff',
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: 40,

    },

    top: {
        flex: 1,
        //backgroundColor: 'red',
        //justifyContent: 'center',
        //alignItems: 'center',
    },

    middle: {
        flex: 0.25,
        //backgroundColor: 'orange',
        //justifyContent: 'center',
        alignItems: 'center',
    },

    bottom: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },

    // bottomUp: {
    //     flex: 1,
    //     backgroundColor: Theme.COLORS.Slate,
    //     borderTopLeftRadius: 40,
    //     borderTopRightRadius: 40,
    // },

    // bottomMid: {
    //     flex: 1,
    //     backgroundColor: Theme.COLORS.Slate,
        
    // },

    // bottomDown: {
    //     flex: 0.5,
    //     backgroundColor: Theme.COLORS.Slate,
    //     borderBottomLeftRadius: 40,
    //     borderBottomRightRadius: 40,

    // },
    
});

    
export { styles }
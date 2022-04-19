import { StyleSheet } from 'react-native';
import Theme from '../../constants/Theme';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Theme.COLORS.Background,
    },

    top: {
        flex: 0.2,
        backgroundColor: 'purple',
    },

    middle: {
        flex: 0.35,
        backgroundColor: 'pink',
    },

    bottom: {
        flex: 1,
        backgroundColor: 'green',
    },

    scrollView: {
        //height: '30%',
    },
    
    scrollStyle: {
        marginTop: '10%',
        marginLeft: '4%',
        marginRight: '4%',
    },

    hamburger: {
        resizeMode: 'contain',
        width: '40%',
        height: '40%',
        marginBottom: '30%',
        marginTop: '3%',
    },


});

export { styles }
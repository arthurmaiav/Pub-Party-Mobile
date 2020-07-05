import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#000'
    },

    logoImage: {
        width: 150,
        height: 150,
        resizeMode: 'stretch',
        marginBottom: 50
    },

    buttons: {
        backgroundColor: 'orange',
        width: 300,
        height: 60,
        margin: 5,
        marginBottom: 10,
        padding: 5,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },

    buttonView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    dropdown: {
        width: 300,
        marginBottom: 10,
        marginTop: 10,
        height: 56,
        color: "#D3CEC4",
    },

});
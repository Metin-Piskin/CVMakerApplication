import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 2,
        paddingBottom: 10,
        marginVertical: 8,
        borderRadius: 5,
        backgroundColor: '#F5F6F8',
        borderColor: '#D2D8DD'
    },
    innercontainer: {
        marginTop: 15,
    },
    textname: {
        position: 'absolute',
        top: -10,
        backgroundColor: '#fff',
        zIndex: 99,
        left: 10
    },
    input: {
        borderWidth: 1,
        paddingVertical: 3,
        borderRadius: 5,
        borderColor: '#D2D8DD',
        backgroundColor: '#fff'
    }
})
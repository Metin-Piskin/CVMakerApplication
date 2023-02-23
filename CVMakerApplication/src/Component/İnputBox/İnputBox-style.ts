import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: '#FAFBFC'
    },
    innercontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight:'400'
    },
})
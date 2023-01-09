import { StyleSheet } from "react-native";

export default StyleSheet.create({
    modalContainer: {
        backgroundColor: '#fff',
        bottom: 0,
        right: 0,
        left: 0,
        position: 'absolute',
        marginHorizontal: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1
    },
    textInputs: {
        paddingVertical: 5,
        borderBottomWidth: 1
    },
    modalCloseButtonContainer: {
        position: 'absolute',
        right: 7,
        top: 3
    }
})
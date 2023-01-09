import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    colorContainer: {
        flexDirection: 'row',
        marginBottom: 15,
        paddingLeft: 10,
    },
    pageContainer: {
        backgroundColor: '#fff',
        height: 610,
        maxHeight: 610,
        borderBottomWidth: 2,
        borderRightWidth: 2,
    },
    topContainer: {
        width: Dimensions.get('screen').width - 60,
        flexDirection: 'row',
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    topİnnerContainer: {
        justifyContent: 'center',
    },
    aboutContainer: {
        flexDirection: 'row',
        maxWidth: Dimensions.get('screen').width - 215
    },
    plusiİmageContainer: {
        borderWidth: 1,
        marginRight: 10,
        marginBottom: 5
    },
    image: {
        width: 125,
        height: 150,
    },
    aboutTextContainer: {
        paddingRight: 45,
        paddingLeft: 10,
        borderRadius: 10,
    },
    skillsAndlanguageAllContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: Dimensions.get('screen').width - 78,
    },
    skillsAndlanguageContainer: {
        width: Dimensions.get('screen').width / 2 - 43,
        marginTop: 7
    },
    skillsAndlanguageListContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    skillsAndlanguageListİnnerContainer: {
        flexDirection: 'row',
    },
    bottomContainer: {
        width: Dimensions.get('screen').width - 75,
        paddingLeft: 10,
        paddingBottom: 8
    },
    experienceAndeducationContainer:{
        marginTop: 7 
    }
})
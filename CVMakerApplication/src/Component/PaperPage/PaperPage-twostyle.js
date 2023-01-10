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
        //borderBottomWidth: 2,
        //borderRightWidth: 2,
        borderTopWidth:2,
        borderLeftWidth:2
    },
    topContainer: {
        width: Dimensions.get('screen').width - 60,
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    topİnnerContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    aboutContainer: {
        // flexDirection: 'row',
        maxWidth: Dimensions.get('screen').width - 250
    },
    plusiİmageContainer: {
        borderWidth: 1,
        //marginRight: 10,
        marginBottom: 5,
        borderRadius:350
    },
    image: {
        width: 140,
        height: 150,
        borderRadius:350
    },
    aboutTextContainer: {
        paddingRight: 35,
        paddingLeft: 10,
        borderRadius: 10,
    },
    skillsAndlanguageAllContainer: {
        marginLeft:10
        //flexDirection: 'row',
        //justifyContent: 'space-around',
        //width: Dimensions.get('screen').width - 78,
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
    experienceAndeducationContainer: {
        marginTop: 7
    }
})
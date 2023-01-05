import React from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';

const İtemModal = ({
    visible,
    setvisible,

    setmodalAboutVisible,
    modalAboutVisible,
    setNameSurname,
    setLocation,
    setEmail,
    setTelNo,
    setLinkedin,
    setGithub,

    setmodalSkillsVisible,
    modalSkillsVisible,
    setSkills,
    SkillsAddPress,

    setmodalLanguageVisible,
    modalLanguageVisible,
    setLanguage,
    LanguageAddPress,

    setmodalObjectiveVisible,
    modalObjectiveVisible,
    setObjective,

    setmodalExperienceVisible,
    modalExperienceVisible,
    setExperience,

    setmodalEducationVisible,
    modalEducationVisible,
    setEducation,

}) => {
    const CloseModal = () => {
        setvisible(false)
        setmodalAboutVisible(false)
        setmodalSkillsVisible(false)
        setmodalLanguageVisible(false)
        setmodalObjectiveVisible(false)
        setmodalExperienceVisible(false)
        setmodalEducationVisible(false)
    }
    return (
        < Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View
                style={{
                    backgroundColor: '#fff',
                    bottom: 0,
                    right: 0,
                    left: 0,
                    position: 'absolute',
                    //width: Dimensions.get('screen').width / 1.06,
                    //height: Dimensions.get('screen').height / 4,
                    marginHorizontal: 10,
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderTopWidth: 1
                }}
            >
                {
                    modalAboutVisible &&
                    <>
                        < TextInput
                            placeholder='Name Surname'
                            onChangeText={setNameSurname}
                            placeholderTextColor={'#000'}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        <TextInput
                            placeholder='Location'
                            onChangeText={setLocation}
                            placeholderTextColor={'#000'}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        <TextInput
                            placeholder='Email'
                            onChangeText={setEmail}
                            placeholderTextColor={'#000'}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                            keyboardType='email-address'
                            textContentType='emailAddress'
                        />
                        <TextInput
                            placeholder='TelNo'
                            onChangeText={setTelNo}
                            placeholderTextColor={'#000'}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                            keyboardType='numeric'
                            maxLength={11}
                        />
                        < TextInput
                            placeholder='Linkedin'
                            onChangeText={setLinkedin}
                            placeholderTextColor={'#000'}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        <TextInput
                            placeholder='Github'
                            onChangeText={setGithub}
                            placeholderTextColor={'#000'}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                    </>
                }
                {
                    modalSkillsVisible &&
                    <>
                        <TextInput
                            placeholder='Skills'
                            onChangeText={setSkills}
                            placeholderTextColor={'#000'}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        <TouchableOpacity onPress={SkillsAddPress}>
                            <Text>Skills Add</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    modalLanguageVisible &&
                    <>
                        <TextInput
                            placeholder='Language'
                            onChangeText={setLanguage}
                            placeholderTextColor={'#000'}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        <TouchableOpacity onPress={LanguageAddPress}>
                            <Text>Language Add</Text>
                        </TouchableOpacity>
                    </>
                }
                {
                    modalObjectiveVisible &&
                    <>
                        <TextInput
                            placeholder='Objective'
                            onChangeText={setObjective}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                    </>
                }
                {
                    modalExperienceVisible &&
                    <>
                        <TextInput
                            placeholder='Experience'
                            onChangeText={setExperience}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                    </>
                }
                {
                    modalEducationVisible &&
                    <>
                        <TextInput
                            placeholder='Education'
                            onChangeText={setEducation}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                    </>
                }
                <TouchableOpacity onPress={CloseModal}>
                    <Text>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default İtemModal;
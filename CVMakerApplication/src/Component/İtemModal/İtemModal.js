import React from 'react';
import { View, Modal, TextInput } from 'react-native';

import ModalButton from '../ModalButton';

const İtemModal = ({
    visible,
    setvisible,

    setmodalAboutVisible,
    modalAboutVisible,
    setName,
    setSurname,
    setCity,
    setCountry,
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
    setPositionText,
    setCompanyText,
    setSummaryText,
    setExperiencesStartDateText,
    setExperiencesEndDateText,
    ExperienceAddPress,

    setmodalEducationVisible,
    modalEducationVisible,
    setFieldofStudyText,
    setSchoolText,
    setEducationsStartDateText,
    setEducationsEndDateText,
    EducationAddPress
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
                            placeholder='Name'
                            onChangeText={setName}
                            placeholderTextColor={'#000'}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        < TextInput
                            placeholder='Surname'
                            onChangeText={setSurname}
                            placeholderTextColor={'#000'}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        <TextInput
                            placeholder='City'
                            onChangeText={setCity}
                            placeholderTextColor={'#000'}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        <TextInput
                            placeholder='Country'
                            onChangeText={setCountry}
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
                        <ModalButton title={'Skills Add'} onPress={SkillsAddPress} />
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
                        <ModalButton title={'Language Add'} onPress={LanguageAddPress} />
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
                            placeholder='Position'
                            onChangeText={setPositionText}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        <TextInput
                            placeholder='Company'
                            onChangeText={setCompanyText}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        <TextInput
                            placeholder='Summary'
                            onChangeText={setSummaryText}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        <TextInput
                            placeholder='Start Date'
                            onChangeText={setExperiencesStartDateText}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        <TextInput
                            placeholder='End Date'
                            onChangeText={setExperiencesEndDateText}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        <ModalButton title={'Experience Add'} onPress={ExperienceAddPress} />
                    </>
                }
                {
                    modalEducationVisible &&
                    <>
                        <TextInput
                            placeholder='Field of Study'
                            onChangeText={setFieldofStudyText}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        <TextInput
                            placeholder='School'
                            onChangeText={setSchoolText}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        <TextInput
                            placeholder='Start Date'
                            onChangeText={setEducationsStartDateText}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        <TextInput
                            placeholder='End Date'
                            onChangeText={setEducationsEndDateText}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        <ModalButton title={'Education Add'} onPress={EducationAddPress} />
                    </>
                }
                <ModalButton title={'Close'} onPress={CloseModal} />
            </View>
        </Modal>
    )
}

export default İtemModal;
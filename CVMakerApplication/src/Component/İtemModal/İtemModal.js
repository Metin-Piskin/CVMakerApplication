import React from 'react';
import { View, Modal, TextInput } from 'react-native';

import styles from './İtemModal-style';
import CutomButton from '../CutomButton';

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
    setSchoolText,
    setFieldofStudyText,
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
            <View style={styles.modalContainer}>
                {
                    modalAboutVisible &&
                    <>
                        < TextInput
                            placeholder='Name'
                            onChangeText={setName}
                            placeholderTextColor={'#000'}
                            style={styles.textInputs}
                        />
                        < TextInput
                            placeholder='Surname'
                            onChangeText={setSurname}
                            placeholderTextColor={'#000'}
                            style={styles.textInputs}
                        />
                        <TextInput
                            placeholder='City'
                            onChangeText={setCity}
                            placeholderTextColor={'#000'}
                            style={styles.textInputs}
                        />
                        <TextInput
                            placeholder='Country'
                            onChangeText={setCountry}
                            placeholderTextColor={'#000'}
                            style={styles.textInputs}
                        />
                        <TextInput
                            placeholder='Email'
                            onChangeText={setEmail}
                            placeholderTextColor={'#000'}
                            style={styles.textInputs}
                            keyboardType='email-address'
                            textContentType='emailAddress'
                        />
                        <TextInput
                            placeholder='TelNo'
                            onChangeText={setTelNo}
                            placeholderTextColor={'#000'}
                            style={styles.textInputs}
                            keyboardType='numeric'
                            maxLength={11}
                        />
                        < TextInput
                            placeholder='Linkedin'
                            onChangeText={setLinkedin}
                            placeholderTextColor={'#000'}
                            style={styles.textInputs}
                        />
                        <TextInput
                            placeholder='Github'
                            onChangeText={setGithub}
                            placeholderTextColor={'#000'}
                            style={styles.textInputs}
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
                            style={styles.textInputs}
                        />
                        <CutomButton title={'Skills Add'} onPress={SkillsAddPress} />
                    </>
                }
                {
                    modalLanguageVisible &&
                    <>
                        <TextInput
                            placeholder='Language'
                            onChangeText={setLanguage}
                            placeholderTextColor={'#000'}
                            style={styles.textInputs}
                        />
                        <CutomButton title={'Language Add'} onPress={LanguageAddPress} />
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
                            style={styles.textInputs}
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
                            style={styles.textInputs}
                        />
                        <TextInput
                            placeholder='Company'
                            onChangeText={setCompanyText}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={styles.textInputs}
                        />
                        <TextInput
                            placeholder='Summary'
                            onChangeText={setSummaryText}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={styles.textInputs}
                        />
                        <TextInput
                            placeholder='Start Date'
                            onChangeText={setExperiencesStartDateText}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={styles.textInputs}
                        />
                        <TextInput
                            placeholder='End Date'
                            onChangeText={setExperiencesEndDateText}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={styles.textInputs}
                        />
                        <CutomButton title={'Experience Add'} onPress={ExperienceAddPress} />
                    </>
                }
                {
                    modalEducationVisible &&
                    <>
                        <TextInput
                            placeholder='School'
                            onChangeText={setSchoolText}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={styles.textInputs}
                        />
                        <TextInput
                            placeholder='Field of Study'
                            onChangeText={setFieldofStudyText}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={styles.textInputs}
                        />
                        <TextInput
                            placeholder='Start Date'
                            onChangeText={setEducationsStartDateText}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={styles.textInputs}
                        />
                        <TextInput
                            placeholder='End Date'
                            onChangeText={setEducationsEndDateText}
                            placeholderTextColor={'#000'}
                            multiline={true}
                            style={styles.textInputs}
                        />
                        <CutomButton title={'Education Add'} onPress={EducationAddPress} />
                    </>
                }
                <View style={styles.modalCloseButtonContainer}>
                    <CutomButton icon={true} onPress={CloseModal} />
                </View>
            </View>
        </Modal>
    )
}

export default İtemModal;
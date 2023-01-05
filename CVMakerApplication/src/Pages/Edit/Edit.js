import React, { useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';

import İtemText from '../../Component/İtemText';
import İtemModal from '../../Component/İtemModal';

const Edit = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const [aboutVisible, setAboutVisible] = useState(false);
    const [namesurname, setNameSurname] = useState('Name Surname');
    const [location, setLocation] = useState('Location');
    const [email, setEmail] = useState('Email');
    const [telno, setTelNo] = useState('TelNo');
    const [linkedin, setLinkedin] = useState('Linkedin');
    const [github, setGithub] = useState('Github');

    const [skillsVisible, setSkillsVisible] = useState(false);
    const [skills, setSkills] = useState([]);
    const [skillsText, setSkillsText] = useState([]);

    const [languageVisible, setLanguageVisible] = useState(false);
    const [language, setLanguage] = useState([]);
    const [languageText, setLanguageText] = useState([]);

    const [objectiveVisible, setObjectiveVisible] = useState(false);
    const [objective, setObjective] = useState('');

    const [experienceVisible, setExperienceVisible] = useState(false);
    const [experience, setExperience] = useState('');

    const [educationVisible, setEducationVisible] = useState(false);
    const [education, setEducation] = useState('');

    const AboutVisiblePress = () => {
        setModalVisible(true)
        setAboutVisible(true)
    }

    const SkillsVisiblePress = () => {
        setModalVisible(true)
        setSkillsVisible(true)
    }

    const AddSkills = () => {
        if (!skillsText) {
            return;
        }
        setSkills([...skills, skillsText]);
    }

    const LanguageVisiblePress = () => {
        setModalVisible(true)
        setLanguageVisible(true)
    }

    const AddLanguage = () => {
        if (!languageText) {
            return;
        }
        setLanguage([...language, languageText]);
    }

    const ObjectiveVisiblePress = () => {
        setModalVisible(true)
        setObjectiveVisible(true)
    }

    const ExperienceVisiblePress = () => {
        setModalVisible(true)
        setExperienceVisible(true)
    }

    const EducationVisiblePress = () => {
        setModalVisible(true)
        setEducationVisible(true)
    }

    return (
        <View >
            <View
                style={{
                    //maxWidth: Dimensions.get('screen').width / 3.2,
                    width: Dimensions.get('screen').width,
                    //height: Dimensions.get('screen').height,
                    borderTopWidth: 2,
                    //borderRightWidth: 2,
                    borderBottomWidth: 2,
                    borderColor: 'red',
                    flexDirection: 'row',
                    //alignItems: 'center',
                    marginTop: 5,
                    paddingVertical: 10,
                    paddingHorizontal: 10
                }}
            >
                <View
                    style={{
                        justifyContent: 'center',
                        //alignItems: 'center'
                    }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={{ uri: 'https://avatars.githubusercontent.com/u/85956297?v=4' }}
                            style={{
                                width: 125,
                                height: 150,
                                marginRight: 10
                            }}
                        />
                        <View>
                            <TouchableOpacity onPress={AboutVisiblePress}>
                                <Text>About</Text>
                            </TouchableOpacity>
                            <İtemText title={namesurname} />
                            <İtemText title={location} logo='location' />
                            <İtemText title={email} logo='mail' />
                            <İtemText title={telno} logo='phone-portrait-outline' />
                            <İtemText title={github} link={true} git={true} githublogo='logo-github' />
                            <İtemText title={linkedin} link={true} linkedinlogo='logo-linkedin' />
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            width: Dimensions.get('screen').width - 15,
                        }}
                    >
                        <TouchableOpacity onPress={SkillsVisiblePress}>
                            <Text>Skills</Text>
                        </TouchableOpacity>
                        {
                            skills.map((skills, index) => {
                                return (
                                    <İtemText key={index} title={skills} />
                                )
                            })
                        }
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            width: Dimensions.get('screen').width - 15,
                        }}
                    >
                        <TouchableOpacity onPress={LanguageVisiblePress}>
                            <Text>Language</Text>
                        </TouchableOpacity>
                        {
                            language.map((language, index) => {
                                return (
                                    <İtemText key={index} title={language} />
                                )
                            })
                        }
                    </View>
                </View>
            </View>
            <View
                style={{
                    maxWidth: Dimensions.get('screen').width / 1.44,
                    paddingHorizontal: 10,
                    paddingVertical: 10
                }}
            >
                <View>
                    <TouchableOpacity onPress={ObjectiveVisiblePress}>
                        <Text>Objective</Text>
                    </TouchableOpacity>
                    <İtemText title={objective} />
                </View>
                <View>
                    <TouchableOpacity onPress={ExperienceVisiblePress}>
                        <Text>Experience</Text>
                    </TouchableOpacity>
                    <İtemText title={experience} />
                </View>
                <View>
                    <TouchableOpacity onPress={EducationVisiblePress}>
                        <Text>Education</Text>
                    </TouchableOpacity>
                    <İtemText title={education} />
                </View>
            </View>
            <İtemModal
                visible={modalVisible}
                setvisible={setModalVisible}

                setmodalAboutVisible={setAboutVisible}
                modalAboutVisible={aboutVisible}
                setNameSurname={setNameSurname}
                setLocation={setLocation}
                setEmail={setEmail}
                setTelNo={setTelNo}
                setLinkedin={setLinkedin}
                setGithub={setGithub}

                setmodalSkillsVisible={setSkillsVisible}
                modalSkillsVisible={skillsVisible}
                setSkills={setSkillsText}
                SkillsAddPress={AddSkills}

                setmodalLanguageVisible={setLanguageVisible}
                modalLanguageVisible={languageVisible}
                setLanguage={setLanguageText}
                LanguageAddPress={AddLanguage}

                setmodalObjectiveVisible={setObjectiveVisible}
                modalObjectiveVisible={objectiveVisible}
                setObjective={setObjective}

                setmodalExperienceVisible={setExperienceVisible}
                modalExperienceVisible={experienceVisible}
                setExperience={setExperience}

                setmodalEducationVisible={setEducationVisible}
                modalEducationVisible={educationVisible}
                setEducation={setEducation}
            />

        </View>
    )
}

export default Edit;
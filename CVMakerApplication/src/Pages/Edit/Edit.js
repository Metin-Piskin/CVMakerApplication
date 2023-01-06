import React, { useState } from 'react';
import { Dimensions, Image, View } from 'react-native';

import İtemTitle from '../../Component/İtemTitle';
import İtemText from '../../Component/İtemText';
import İtemModal from '../../Component/İtemModal';
import EducationsText from '../../Component/EducationsText';
import ExperiencesText from '../../Component/ExperiencesText';

const Edit = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const [aboutVisible, setAboutVisible] = useState(false);
    const [name, setName] = useState('Name');
    const [surname, setSurname] = useState('Surname');
    const [city, setCity] = useState('City');
    const [country, setCountry] = useState('Country');
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
    const [positionText, setPositionText] = useState([]);
    const [companyText, setCompanyText] = useState([]);
    const [summaryText, setSummaryText] = useState([]);
    const [experiencesStartDateText, setExperiencesStartDateText] = useState([]);
    const [experiencesEndDateText, setExperiencesEndDateText] = useState([]);
    const [experiences, setExperiences] = useState([]);

    const [educationVisible, setEducationVisible] = useState(false);
    const [fieldofStudyText, setFieldofStudyText] = useState([]);
    const [schoolText, setSchoolText] = useState([]);
    const [educationsStartDateText, setEducationsStartDateText] = useState([]);
    const [educationsEndDateText, setEducationsEndDateText] = useState([]);
    const [education, setEducation] = useState([]);

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

    const AddExperience = () => {
        if (!positionText) { return; }
        if (!companyText) { return; }
        if (!summaryText) { return; }
        if (!experiencesStartDateText) { return; }
        if (!experiencesEndDateText) { return; }
        setExperiences(
            [...experiences,
            { positionText },
            { companyText },
            { summaryText },
            { experiencesStartDateText },
            { experiencesEndDateText }
            ]
        );
    }

    const EducationVisiblePress = () => {
        setModalVisible(true)
        setEducationVisible(true)
    }

    const AddEducation = () => {
        if (!fieldofStudyText) { return; }
        if (!schoolText) { return; }
        if (!educationsStartDateText) { return; }
        if (!educationsEndDateText) { return; }
        setEducation(
            [...education,
            { fieldofStudyText },
            { schoolText },
            { educationsStartDateText },
            { educationsEndDateText }
            ]
        );
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
                            <İtemTitle title={'About'} onPress={AboutVisiblePress} />

                            <İtemText title={name + ' ' + surname} />
                            <İtemText title={city + ', ' + country} logo='location' />
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
                        <İtemTitle title={'Skills'} onPress={SkillsVisiblePress} />
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
                        <İtemTitle title={'Language'} onPress={LanguageVisiblePress} />
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
                    <İtemTitle title={'Objective'} onPress={ObjectiveVisiblePress} />
                    <İtemText title={objective} />
                </View>
                <View>
                    <İtemTitle title={'Experience'} onPress={ExperienceVisiblePress} />
                    {
                        experiences
                            .map((experiences, index) => {
                                return < ExperiencesText item={experiences} key={index} />
                            })
                    }
                </View>
                <View>
                    <İtemTitle title={'Education'} onPress={EducationVisiblePress} />
                    {
                        education
                            .map((education, index) => {
                                return < EducationsText item={education} key={index} />
                            })
                    }
                </View>
            </View>

            <İtemModal
                visible={modalVisible}
                setvisible={setModalVisible}

                setmodalAboutVisible={setAboutVisible}
                modalAboutVisible={aboutVisible}
                setName={setName}
                setSurname={setSurname}
                setCity={setCity}
                setCountry={setCountry}
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
                setPositionText={setPositionText}
                setCompanyText={setCompanyText}
                setSummaryText={setSummaryText}
                setExperiencesStartDateText={setExperiencesStartDateText}
                setExperiencesEndDateText={setExperiencesEndDateText}
                ExperienceAddPress={AddExperience}

                setmodalEducationVisible={setEducationVisible}
                modalEducationVisible={educationVisible}
                setFieldofStudyText={setFieldofStudyText}
                setSchoolText={setSchoolText}
                setEducationsStartDateText={setEducationsStartDateText}
                setEducationsEndDateText={setEducationsEndDateText}
                EducationAddPress={AddEducation}
            />

        </View>
    )
}

export default Edit;
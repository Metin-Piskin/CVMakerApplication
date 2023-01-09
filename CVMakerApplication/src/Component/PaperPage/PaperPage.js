import React, { useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import oneStyle from './PaperPage-onestyle';

import İtemTitle from '../İtemTitle';
import İtemText from '../İtemText';
import İtemModal from '../İtemModal';
import EducationsText from '../EducationsText';
import ExperiencesText from '../ExperiencesText';
import Colors from '../Colors';
import Colorlist from '../Colorlist.json';

const plusimage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1707px-Plus_symbol.svg.png';

const PaperPage = () => {
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
    const [schoolText, setSchoolText] = useState([]);
    const [fieldofStudyText, setFieldofStudyText] = useState([]);
    const [educationsStartDateText, setEducationsStartDateText] = useState([]);
    const [educationsEndDateText, setEducationsEndDateText] = useState([]);
    const [education, setEducation] = useState([]);

    const [imageGallery, setImageGallery] = useState(null);

    const [borderWidthColor, setBorderWidthColor] = useState('black');

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

    const openGallery = () => {
        const option = {
            mediaType: 'photo',
            qualiy: 1,
        }

        launchImageLibrary(option, (res) => {
            if (res.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (res.errorCode) {
                console.log(res.errorMessage);
            }
            else {
                const data = res.assets[0]
                setImageGallery(data)
            }
        })
    }


    return (
        <>
            <View style={oneStyle.colorContainer}>
                {
                    Colorlist.map((color, index) => {
                        const BorderWidthColorSelect = () => {
                            setBorderWidthColor(color.value)
                        }
                        return (
                            <Colors
                                onPress={BorderWidthColorSelect}
                                color={color}
                                key={index}
                            />
                        )
                    })
                }
            </View>
            <ScrollView style={[oneStyle.pageContainer, { borderColor: borderWidthColor }]} >
                <View style={[oneStyle.topContainer, { borderColor: borderWidthColor }]}  >
                    <View style={oneStyle.topİnnerContainer}>
                        <View style={oneStyle.aboutContainer}>
                            {
                                imageGallery === null ? (
                                    <TouchableOpacity
                                        onPress={openGallery}
                                        style={[oneStyle.plusiİmageContainer, { borderColor: borderWidthColor }]}
                                    >
                                        <Image
                                            source={{ uri: plusimage }}
                                            style={oneStyle.image}
                                        />
                                    </TouchableOpacity>
                                ) : (
                                    <Image
                                        source={{ uri: imageGallery.uri }}
                                        style={[oneStyle.image, { marginRight: 10, marginBottom: 5 }]}
                                    />
                                )
                            }
                            <View>
                                <İtemTitle
                                    title={'About'}
                                    onPress={AboutVisiblePress}
                                    IconName='id-card'
                                    borderColor={borderWidthColor}
                                    IconColor={
                                        borderWidthColor === 'white' ? (
                                            'black'
                                        ) : (
                                            borderWidthColor
                                        )
                                    }
                                />

                                <View style={[oneStyle.aboutTextContainer, { borderColor: borderWidthColor }]}>
                                    <View style={{ alignItems: 'center' }}>
                                        <İtemText title={name + ' ' + surname} />
                                    </View>
                                    <İtemText title={city + ', ' + country} logo='location' />
                                    <İtemText title={email} logo='mail' />
                                    <İtemText title={telno} logo='phone-portrait-outline' />
                                    <İtemText title={github} link={true} git={true} githublogo='logo-github' />
                                    <İtemText title={linkedin} link={true} linkedinlogo='logo-linkedin' />
                                </View>
                            </View>
                        </View>
                        <View style={oneStyle.skillsAndlanguageAllContainer}>
                            <View style={oneStyle.skillsAndlanguageContainer}>
                                <İtemTitle
                                    title={'Skills'}
                                    onPress={SkillsVisiblePress}
                                    IconName='rocket'
                                    borderColor={borderWidthColor}
                                    IconColor={
                                        borderWidthColor === 'white' ? (
                                            'black'
                                        ) : (
                                            borderWidthColor
                                        )
                                    }
                                />
                                <View style={oneStyle.skillsAndlanguageListContainer}>
                                    {
                                        skills.map((skills, index) => {
                                            return (
                                                <View
                                                    key={index}
                                                    style={oneStyle.skillsAndlanguageListİnnerContainer}
                                                >
                                                    <İtemText title={skills} />
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                            <View style={oneStyle.skillsAndlanguageContainer}>
                                <İtemTitle
                                    title={'Language'}
                                    onPress={LanguageVisiblePress}
                                    IconName='language'
                                    borderColor={borderWidthColor}
                                    IconColor={
                                        borderWidthColor === 'white' ? (
                                            'black'
                                        ) : (
                                            borderWidthColor
                                        )
                                    }
                                />
                                <View style={oneStyle.skillsAndlanguageListContainer}>
                                    {
                                        language.map((language, index) => {
                                            return (
                                                <View
                                                    key={index}
                                                    style={oneStyle.skillsAndlanguageListİnnerContainer}
                                                >
                                                    <İtemText title={language} />
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={oneStyle.bottomContainer} >
                    <View >
                        <İtemTitle
                            title={'Objective'}
                            onPress={ObjectiveVisiblePress}
                            IconName='dice-d6'
                            borderColor={borderWidthColor}
                            IconColor={
                                borderWidthColor === 'white' ? (
                                    'black'
                                ) : (
                                    borderWidthColor
                                )
                            }
                        />
                        <İtemText title={objective} />
                    </View>
                    <View style={oneStyle.experienceAndeducationContainer}>
                        <İtemTitle
                            title={'Experience'}
                            onPress={ExperienceVisiblePress}
                            IconName='briefcase'
                            borderColor={borderWidthColor}
                            IconColor={
                                borderWidthColor === 'white' ? (
                                    'black'
                                ) : (
                                    borderWidthColor
                                )
                            }
                        />
                        {
                            experiences
                                .map((experiences, index) => {
                                    return < ExperiencesText item={experiences} key={index} />
                                })
                        }
                    </View>
                    <View style={oneStyle.experienceAndeducationContainer}>
                        <İtemTitle
                            title={'Education'}
                            onPress={EducationVisiblePress}
                            IconName='graduation-cap'
                            borderColor={borderWidthColor}
                            IconColor={
                                borderWidthColor === 'white' ? (
                                    'black'
                                ) : (
                                    borderWidthColor
                                )
                            }
                        />
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
                    setSchoolText={setSchoolText}
                    setFieldofStudyText={setFieldofStudyText}
                    setEducationsStartDateText={setEducationsStartDateText}
                    setEducationsEndDateText={setEducationsEndDateText}
                    EducationAddPress={AddEducation}
                />

            </ScrollView>
        </>
    )
}

export default PaperPage
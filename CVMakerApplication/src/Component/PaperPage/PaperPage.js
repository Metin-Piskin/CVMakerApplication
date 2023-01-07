import React, { useState } from 'react';
import { Dimensions, Image, TouchableOpacity, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

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
    const [fieldofStudyText, setFieldofStudyText] = useState([]);
    const [schoolText, setSchoolText] = useState([]);
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
            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: 15,
                    paddingLeft: 5,
                }}
            >
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
            <View
                style={{
                    backgroundColor: '#fff',
                    height: 610,
                    maxHeight: 610,
                    borderTopWidth: 2,
                    borderRightWidth: 2,
                    borderColor: borderWidthColor,

                }}
            >
                <View
                    style={{
                        width: Dimensions.get('screen').width - 60,
                        borderBottomWidth: 2,
                        borderColor: borderWidthColor,
                        flexDirection: 'row',
                        marginTop: 5,
                        paddingVertical: 10,
                        paddingHorizontal: 10
                    }}
                >
                    <View
                        style={{
                            justifyContent: 'center',
                        }}
                    >
                        <View style={{
                            flexDirection: 'row',
                            maxWidth: Dimensions.get('screen').width - 215
                        }}>
                            {
                                imageGallery === null ? (
                                    <TouchableOpacity onPress={openGallery}>
                                        <Image
                                            source={{ uri: plusimage }}
                                            style={{
                                                width: 125,
                                                height: 150,
                                                marginRight: 10
                                            }}
                                        />
                                    </TouchableOpacity>
                                ) : (
                                    <Image
                                        source={{ uri: imageGallery.uri }}
                                        style={{
                                            width: 125,
                                            height: 150,
                                            marginRight: 10
                                        }}
                                    />
                                )
                            }
                            <View
                                style={{
                                    borderWidth: 1,
                                    paddingRight: 45,
                                    paddingLeft: 10,
                                    borderColor: borderWidthColor,
                                }}
                            >
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
                                justifyContent: 'space-around',
                                width: Dimensions.get('screen').width - 78,
                            }}
                        >
                            <View
                                style={{
                                    width: Dimensions.get('screen').width / 2 - 43,
                                }}
                            >
                                <İtemTitle title={'Skills'} onPress={SkillsVisiblePress} />
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    {
                                        skills.map((skills, index) => {
                                            return (
                                                <İtemText key={index} title={skills} />
                                            )
                                        })
                                    }
                                </View>
                            </View>
                            <View
                                style={{
                                    width: Dimensions.get('screen').width / 2 - 43,
                                }}
                            >
                                <İtemTitle title={'Language'} onPress={LanguageVisiblePress} />
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}
                                >
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
                    </View>
                </View>
                <View
                    style={{
                        width: Dimensions.get('screen').width - 75,
                        paddingHorizontal: 10,
                        paddingVertical: 10
                    }}
                >
                    <View >
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
        </>
    )
}

export default PaperPage
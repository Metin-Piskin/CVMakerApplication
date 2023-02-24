import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Formik } from 'formik';

import İnputBox from './Component/İnputBox';
import İnput from './Component/İnput';
import PlusButton from './Component/PlusButton';
import Skills from './Component/Skills';
import EducationsBox from './Component/EducationsBox';
import ProjectsBox from './Component/ProjectsBox';
import ExperiencesBox from './Component/ExperiencesBox';

import LinkData from './LinkData.json';

const App = () => {
    const [aboutModalVisible, setAboutModalVisible] = useState<boolean>(false);
    const [skillsModalVisible, setSkillsModalVisible] = useState<boolean>(false);
    const [educationsModalVisible, setEducationsModalVisible] = useState<boolean>(false);
    const [projectsModalVisible, setProjectsModalVisible] = useState<boolean>(false);
    const [experiencesModalVisible, setExperiencesModalVisible] = useState<boolean>(false);
    const [InputLink, setInputLink] = useState<Array<any>>([]);

    const [imageGallery, setImageGallery] = useState<any>(null);

    const [Link, setLink] = useState<any>();

    const [toolsSkillsText, setToolsSkillsText] = useState<Array<any>>([]);
    const [toolsSkills, setToolsSkills] = useState<Array<any>>([]);

    const [industryKnowledgeText, setIndustryKnowledgeText] = useState<Array<any>>([]);
    const [industryKnowledge, setIndustryKnowledge] = useState<Array<any>>([]);

    const [languagesText, setLanguagesText] = useState<Array<any>>([]);
    const [languages, setLanguages] = useState<Array<any>>([]);

    const [educationsFormData, setEducationsFormData] = useState<Array<any>>([]);
    const [projectsFormData, setProjectsFormData] = useState<Array<any>>([]);
    const [experiencesFormData, setExperiencesFormData] = useState<Array<any>>([]);

    const initialFormValues = {
        NameSurname: '',
        Job: '',
        Location: '',
        About: '',
    }

    const openGallery = () => {
        const option: any = {
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
                const data: any = res.assets
                setImageGallery(data[0])
            }
        })
    }

    const handleFormSubmit = async (formValues: any) => {
        console.log(imageGallery.uri)

        console.log(formValues.NameSurname)
        console.log(formValues.Job)
        console.log(formValues.Location)
        console.log(formValues.About)
        console.log(Link)

        console.log(toolsSkills)
        console.log(industryKnowledge)
        console.log(languages)

        console.log(educationsFormData)
        console.log(projectsFormData)
        console.log(experiencesFormData)
    }


    const EducationsAddForm = () => {
        const newForm = {
            studyon: '',
            school: '',
            educationsStart: '',
            educationsEnd: ''
        };
        setEducationsFormData([...educationsFormData, newForm]);
    }

    const HandleEducationsFormChange = (index: any, field: any, value: any) => {
        const updatedFormData: any = [...educationsFormData];
        updatedFormData[index][field] = value;
        setEducationsFormData(updatedFormData);
    }

    const ProjectsAddForm = () => {
        const newForm = {
            ProjectTitl: '',
            ProjectLink: '',
            ProjectSummaryon: '',
        };
        setProjectsFormData([...projectsFormData, newForm]);
    }

    const HandleProjectsFormChange = (index: any, field: any, value: any) => {
        const updatedFormData: any = [...projectsFormData];
        updatedFormData[index][field] = value;
        setProjectsFormData(updatedFormData);
    }

    const ExperiencesAddForm = () => {
        const newForm = {
            Positionon: '',
            Companyon: '',
            Summaryon: '',
            ExperiencesStart: '',
            ExperiencesEnd: ''
        };
        setExperiencesFormData([...experiencesFormData, newForm]);
    }

    const HandleExperiencesFormChange = (index: any, field: any, value: any) => {
        const updatedFormData: any = [...experiencesFormData];
        updatedFormData[index][field] = value;
        setExperiencesFormData(updatedFormData);
    }


    return (
        <ScrollView style={styles.container}>
            <StatusBar
                backgroundColor={'#E0EDF6'}
                barStyle={'dark-content'}
            />
            {
                imageGallery === null ? (
                    <TouchableOpacity
                        onPress={openGallery}
                        style={styles.imagecontainer}
                    >
                        <Image
                            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg' }}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                ) : (
                    <View style={styles.imagecontainer}>
                        <Image
                            source={{ uri: imageGallery.uri }}
                            style={styles.image}
                        />
                    </View>
                )
            }
            <Formik
                initialValues={initialFormValues}
                onSubmit={handleFormSubmit}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <İnputBox
                            title='About Yourself'
                            onPress={() => aboutModalVisible ? setAboutModalVisible(false) : setAboutModalVisible(true)}
                            ModalVisible={aboutModalVisible}
                            Modalİtem={
                                <View>
                                    <İnput
                                        TextName='Name & Surname'
                                        placeholder='Your name'
                                        onChangeText={handleChange('NameSurname')}
                                        value={values.NameSurname}
                                    />
                                    <İnput
                                        TextName='Job'
                                        placeholder='What is your job?'
                                        onChangeText={handleChange('Job')}
                                        value={values.Job}
                                    />
                                    <İnput
                                        TextName='Location'
                                        placeholder='Where do you live?'
                                        onChangeText={handleChange('Location')}
                                        value={values.Location}
                                    />
                                    <İnput
                                        TextName='About'
                                        placeholder='A few sentences about yourself'
                                        multiline={true}
                                        onChangeText={handleChange('About')}
                                        value={values.About}
                                    />
                                    <View style={styles.listcontainer}>
                                        {
                                            LinkData.map((e, index) => {
                                                const [tick, settick] = useState<boolean>(false);

                                                const HandleMalzeme = (value: string) => {
                                                    if (tick === true) {
                                                        settick(false)
                                                        setInputLink(oldValues => {
                                                            return oldValues.filter(fruit => fruit !== value)
                                                        })
                                                    } else {
                                                        settick(true)
                                                        setInputLink([...InputLink, value])
                                                    }
                                                }
                                                return (
                                                    <TouchableOpacity
                                                        key={index}
                                                        onPress={() => HandleMalzeme(e.value)}
                                                    >
                                                        <View style={styles.listinnercontainer}>
                                                            <View style={[
                                                                styles.listimleç,
                                                                tick ? {
                                                                    //borderColor: '#32cd32',
                                                                    backgroundColor: '#000',
                                                                } : {
                                                                    borderColor: '#000',
                                                                    //backgroundColor: '#000',
                                                                }
                                                            ]}></View>
                                                            <Text style={styles.listtitle}>
                                                                {e.title}
                                                            </Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </View>
                                    {
                                        InputLink.map((e, index) => {
                                            return (
                                                <İnput
                                                    key={index}
                                                    TextName={e}
                                                    placeholder='Only Username'
                                                    onChangeText={setLink}
                                                //value={values.Link}
                                                />
                                            )
                                        })
                                    }
                                </View>
                            }
                        />
                        <İnputBox
                            title='Skills'
                            onPress={() => skillsModalVisible ? setSkillsModalVisible(false) : setSkillsModalVisible(true)}
                            ModalVisible={skillsModalVisible}
                            Modalİtem={
                                <View>
                                    <İnput
                                        TextName='Tools and Tech Skills'
                                        placeholder='Tools and Tech Skills'
                                        onChangeText={setToolsSkillsText}
                                    />
                                    <View style={[styles.skillslistcontainer, { backgroundColor: '#EFF6FF' }]}>
                                        {
                                            toolsSkills.map((e, index) => {
                                                return (
                                                    <Skills
                                                        key={index}
                                                        title={e}
                                                        containerColor='#CEE4FE'
                                                        titleColor='#2E4D96'
                                                        iconColor='#63A7FA'
                                                    />
                                                )
                                            })
                                        }
                                    </View>
                                    <PlusButton
                                        addPress={() => setToolsSkills([...toolsSkills, toolsSkillsText])}
                                        title='Add'
                                        backgroundColor='#CEE4FE'
                                        titleColor='#2E4D96'
                                        borderColor='#63A7FA'
                                    />

                                    <İnput
                                        TextName='Industry Knowledge'
                                        placeholder='What is your job?'
                                        onChangeText={setIndustryKnowledgeText}
                                    />
                                    <View style={[styles.skillslistcontainer, { backgroundColor: '#F6F3FF' }]}>
                                        {
                                            industryKnowledge.map((e, index) => {
                                                return (
                                                    <Skills
                                                        key={index}
                                                        title={e}
                                                        containerColor='#E5DFFE'
                                                        titleColor='#552099'
                                                        iconColor='#AA8DFA'
                                                    />
                                                )
                                            })
                                        }
                                    </View>
                                    <PlusButton
                                        addPress={() => setIndustryKnowledge([...industryKnowledge, industryKnowledgeText])}
                                        title='Add'
                                        backgroundColor='#E5DFFE'
                                        titleColor='#552099'
                                        borderColor='#AA8DFA'
                                    />

                                    <İnput
                                        TextName='Languages'
                                        placeholder='Where do you live?'
                                        onChangeText={setLanguagesText}
                                    />
                                    <View style={[styles.skillslistcontainer, { backgroundColor: '#FFF2F2' }]}>
                                        {
                                            languages.map((e, index) => {
                                                return (
                                                    <Skills
                                                        key={index}
                                                        title={e}
                                                        containerColor='#FED9DD'
                                                        titleColor='#8C153C'
                                                        iconColor='#FB7487'
                                                    />
                                                )
                                            })
                                        }
                                    </View>
                                    <PlusButton
                                        addPress={() => setLanguages([...languages, languagesText])}
                                        title='Add'
                                        backgroundColor='#FED9DD'
                                        titleColor='#8C153C'
                                        borderColor='#FB7487'
                                    />

                                </View>
                            }
                        />
                        <İnputBox
                            title='Educations'
                            onPress={() => educationsModalVisible ? setEducationsModalVisible(false) : setEducationsModalVisible(true)}
                            ModalVisible={educationsModalVisible}
                            Modalİtem={
                                <View>
                                    {
                                        educationsFormData.map((form, index) => (
                                            <EducationsBox
                                                key={index}
                                                studyonChangeText={(text: any) => HandleEducationsFormChange(index, 'studyon', text)}
                                                studyvalue={form.studyon}
                                                SchoolonChangeText={(text: any) => HandleEducationsFormChange(index, 'school', text)}
                                                Schoolvalue={form.school}
                                                StartonChangeText={(text: any) => HandleEducationsFormChange(index, 'educationsStart', text)}
                                                Startvalue={form.educationsStart}
                                                EndonChangeText={(text: any) => HandleEducationsFormChange(index, 'educationsEnd', text)}
                                                Endvalue={form.educationsEnd}
                                            />
                                        ))
                                    }
                                    <PlusButton
                                        plus={true}
                                        plusPress={EducationsAddForm}
                                    />
                                </View>
                            }
                        />
                        <İnputBox
                            title='Projects'
                            onPress={() => projectsModalVisible ? setProjectsModalVisible(false) : setProjectsModalVisible(true)}
                            ModalVisible={projectsModalVisible}
                            Modalİtem={
                                <View>
                                    {
                                        projectsFormData.map((form, index) => (
                                            <ProjectsBox
                                                key={index}
                                                ProjectTitleonChangeText={(text: any) => HandleProjectsFormChange(index, 'ProjectTitl', text)}
                                                ProjectTitlevalue={form.ProjectTitl}
                                                ProjectLinkonChangeText={(text: any) => HandleProjectsFormChange(index, 'ProjectLink', text)}
                                                ProjectLinkvalue={form.ProjectLink}
                                                ProjectSummaryonChangeText={(text: any) => HandleProjectsFormChange(index, 'ProjectSummaryon', text)}
                                                ProjectSummaryvalue={form.ProjectSummaryon}
                                            />
                                        ))
                                    }
                                    <PlusButton
                                        plus={true}
                                        plusPress={ProjectsAddForm}
                                    />
                                </View>
                            }
                        />
                        <İnputBox
                            title='Experiences'
                            onPress={() => experiencesModalVisible ? setExperiencesModalVisible(false) : setExperiencesModalVisible(true)}
                            ModalVisible={experiencesModalVisible}
                            Modalİtem={
                                <View>
                                    {
                                        experiencesFormData.map((form, index) => (
                                            <ExperiencesBox
                                                key={index}
                                                PositiononChangeText={(text: any) => HandleExperiencesFormChange(index, 'Positionon', text)}
                                                Positionvalue={form.Positionon}
                                                CompanyonChangeText={(text: any) => HandleExperiencesFormChange(index, 'Companyon', text)}
                                                Companyvalue={form.Companyon}
                                                SummaryonChangeText={(text: any) => HandleExperiencesFormChange(index, 'Summaryon', text)}
                                                Summaryvalue={form.Summaryon}
                                                StartdateonChangeText={(text: any) => HandleExperiencesFormChange(index, 'ExperiencesStart', text)}
                                                Startdatevalue={form.ExperiencesStart}
                                                EnddateonChangeText={(text: any) => HandleExperiencesFormChange(index, 'ExperiencesEnd', text)}
                                                Enddatevalue={form.ExperiencesEnd}
                                            />
                                        ))
                                    }
                                    <PlusButton
                                        plus={true}
                                        plusPress={ExperiencesAddForm}
                                    />
                                </View>
                            }
                        />
                        <TouchableOpacity onPress={handleSubmit}>
                            <Text>Button</Text>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
        </ScrollView>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E0EDF6'
    },
    imagecontainer: {
        alignSelf: 'center',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 60
    },
    listcontainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 10
    },
    listinnercontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
        marginHorizontal: 10
    },
    listimleç: {
        borderWidth: 1,
        width: 15,
        height: 15,
        borderRadius: 8,
        marginHorizontal: 3,
    },
    listtitle: {
        //fontSize: 17,
        //color: '#fff'
    },
    skillslistcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        gap: 3,
        marginVertical: 5,
        paddingVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D2D8DD'
    }
})
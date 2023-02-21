import React, { useState } from 'react';
import {
    StyleSheet,
    Text, View,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

import İnputBox from './Component/İnputBox';
import İnput from './Component/İnput';

const App = () => {
    const [aboutModalVisible, setAboutModalVisible] = useState<boolean>(false);
    const [skillsModalVisible, setSkillsModalVisible] = useState<boolean>(false);
    const [educationsModalVisible, setEducationsModalVisible] = useState<boolean>(false);
    const [projectsModalVisible, setProjectsModalVisible] = useState<boolean>(false);
    const [experiencesModalVisible, setExperiencesModalVisible] = useState<boolean>(false);
    const [link, setLink] = useState<Array<any>>([]);


    return (
        <ScrollView>
            <StatusBar
                backgroundColor={'#fff'}
                barStyle={'dark-content'}
            />
            <TouchableOpacity
                style={styles.imagecontainer}
            >
                <Image
                    source={{ uri: 'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg' }}
                    style={styles.image}
                />
            </TouchableOpacity>
            <İnputBox
                title='About Yourself'
                onPress={() => aboutModalVisible ? setAboutModalVisible(false) : setAboutModalVisible(true)}
                ModalVisible={aboutModalVisible}
                Modalİtem={
                    <View>
                        <İnput
                            TextName='Name & Surname'
                            placeholder='Your name'
                        />
                        <İnput
                            TextName='Job'
                            placeholder='What is your job?'
                        />
                        <İnput
                            TextName='Location'
                            placeholder='Where do you live?'
                        />
                        <İnput
                            TextName='About'
                            placeholder='A few sentences about yourself'
                            multiline={true}
                        />
                        <View style={styles.listcontainer}>
                            {
                                LinkData.map((e, index) => {
                                    const [tick, settick] = useState<boolean>(false);

                                    const HandleMalzeme = (value: string) => {
                                        if (tick === true) {
                                            settick(false)
                                            setLink(oldValues => {
                                                return oldValues.filter(fruit => fruit !== value)
                                            })
                                        } else {
                                            settick(true)
                                            setLink([...link, value])
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
                            link.map((e, index) => {
                                return (
                                    <İnput
                                        key={index}
                                        TextName={e}
                                        placeholder='Only Username'
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
                        />
                        <İnput
                            TextName='Industry Knowledge'
                            placeholder='What is your job?'
                        />
                        <İnput
                            TextName='Languages'
                            placeholder='Where do you live?'
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
                        <Text>Button</Text>
                    </View>
                }
            />
            <İnputBox
                title='Projects'
                onPress={() => projectsModalVisible ? setProjectsModalVisible(false) : setProjectsModalVisible(true)}
                ModalVisible={projectsModalVisible}
                Modalİtem={
                    <View>
                        <Text>Button</Text>
                    </View>
                }
            />
            <İnputBox
                title='Experiences'
                onPress={() => experiencesModalVisible ? setExperiencesModalVisible(false) : setExperiencesModalVisible(true)}
                ModalVisible={experiencesModalVisible}
                Modalİtem={
                    <View>
                        <Text>Button</Text>
                    </View>
                }
            />
        </ScrollView>
    )
}

export default App;

const styles = StyleSheet.create({
    imagecontainer: {
        borderWidth: 1,
        borderColor: '#000',
        alignSelf: 'center',
        borderRadius: 5,
    },
    image: {
        width: 100,
        height: 110,
        resizeMode: 'contain'
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
})

const LinkData = [
    {
        title: 'Mail',
        value: 'Mail'
    },
    {
        title: 'Portfolio',
        value: 'Portfolio'
    },
    {
        title: 'Github',
        value: 'Github'
    },
    {
        title: 'Twitter',
        value: 'Twitter'
    },
    {
        title: 'LinkedIn',
        value: 'LinkedIn'
    },
    {
        title: 'Instagram',
        value: 'Instagram'
    },
    {
        title: 'Facebook',
        value: 'Facebook'
    },
]
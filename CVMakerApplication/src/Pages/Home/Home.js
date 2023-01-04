import React, { useState } from 'react';
import { Button, Dimensions, Image, View } from 'react-native';

import Contact from '../../Component/Contact';
import ContactModal from '../../Component/ContactModal';

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [namesurname, setNameSurname] = useState('Name Surname');
    const [location, setLocation] = useState('Location');
    const [email, setEmail] = useState('Email');
    const [telno, setTelNo] = useState('TelNo');
    const [linkedin, setLinkedin] = useState('Linkedin');
    const [github, setGithub] = useState('Github');
    const [namesurnameText, setNameSurnameText] = useState(false);


    const NameSurnamePress = () => {
        setModalVisible(true)
        setNameSurnameText(true)
    }

    return (
        <View>
            <View
                style={{
                    width: Dimensions.get('screen').width,
                    borderTopWidth: 2,
                    borderBottomWidth: 2,
                    borderColor: 'red',
                    flexDirection: 'row',
                    marginTop: 5,
                    paddingVertical: 10
                }}
            >
                <Image
                    source={{ uri: 'https://avatars.githubusercontent.com/u/85956297?v=4' }}
                    style={{
                        width: 100,
                        height: 120
                    }}
                />
                <View
                    style={{
                        justifyContent: 'center',
                        //alignItems: 'center'
                    }}
                >
                    <Contact title={namesurname} />
                    <Contact title={location} />
                    <Contact title={email} />
                    <Contact title={telno} />
                    <Contact title={github} link={true} git={true} />
                    <Contact title={linkedin} link={true} />
                    <Button
                        title='Press'
                        onPress={NameSurnamePress}
                    />
                </View>
            </View>

            <ContactModal
                visible={modalVisible}
                setvisible={setModalVisible}
                setNameSurname={setNameSurname}
                setLocation={setLocation}
                setEmail={setEmail}
                setTelNo={setTelNo}
                setLinkedin={setLinkedin}
                setGithub={setGithub}
                modalNameSurnameVisible={namesurnameText}
            />

        </View>
    )
}

export default Home;
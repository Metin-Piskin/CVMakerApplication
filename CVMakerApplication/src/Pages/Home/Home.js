import React, { useState } from 'react';
import { Dimensions, Image, View } from 'react-native';

import Contact from '../../Component/Contact';
import ContactModal from '../../Component/ContactModal';

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('Name');
    const [surname, setSurname] = useState('Surname');
    const [location, setLocation] = useState('Location');
    const [telno, setTelNo] = useState('TelNo');
    const [namesurnameText, setNameSurnameText] = useState(false);


    const NameSurnamePress = () => {
        setModalVisible(true)
        setNameSurnameText(true)
    }

    return (
        <View>
            <View
                style={{
                    maxWidth: 140,
                    height: Dimensions.get('screen').height,
                    alignItems: 'center',
                    borderRightWidth: 2,
                    borderLeftWidth: 2,
                    borderColor: 'red'
                }}
            >
                <Image
                    source={{uri: 'https://avatars.githubusercontent.com/u/85956297?v=4'}}
                    style={{
                        width: 100,
                        height: 120
                    }}
                />
                <View style={{ flexDirection: 'row' }}>
                    <Contact title={name} onPress={NameSurnamePress} />
                    <Contact title={surname} onPress={NameSurnamePress} />
                </View>
                <Contact title={location} onPress={NameSurnamePress} />
                <Contact title={telno} onPress={NameSurnamePress} />
            </View>

            <ContactModal
                visible={modalVisible}
                setvisible={setModalVisible}
                setName={setName}
                setSurname={setSurname}
                setLocation={setLocation}
                setTelNo={setTelNo}
                modalNameSurnameVisible={namesurnameText}
            />

        </View>
    )
}

export default Home;
import React from 'react';
import { View, Text, Modal, TextInput } from 'react-native';

const ContactModal = ({
    visible,
    setvisible,
    modalNameSurnameVisible,
    setNameSurname,
    setLocation,
    setEmail,
    setTelNo,
    setLinkedin,
    setGithub,
}) => {
    const CloseModal = () => {
        setvisible(false)
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
                    modalNameSurnameVisible &&
                    <>
                        < TextInput
                            placeholder='Name Surname'
                            onChangeText={setNameSurname}
                            placeholderTextColor={'#000'}
                            style={{ paddingVertical: 5, borderBottomWidth: 1 }}
                        />
                        <TextInput
                            placeholder='Location'
                            onChangeText={setLocation}
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
                <Text onPress={CloseModal}>
                    Close
                </Text>
            </View>
        </Modal>
    )
}

export default ContactModal;
import React from 'react';
import { View, Text, Modal, TextInput } from 'react-native';

const ContactModal = ({
    visible,
    setvisible,
    modalNameSurnameVisible,
    setName,
    setSurname,
    setLocation,
    setTelNo
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
                            placeholder='Name'
                            onChangeText={setName}
                            placeholderTextColor={'#000'}
                            style={{ paddingVertical: 4.5, borderBottomWidth: 1 }}
                        />
                        <TextInput
                            placeholder='Surname'
                            onChangeText={setSurname}
                            placeholderTextColor={'#000'}
                            style={{ paddingVertical: 4.5, borderBottomWidth: 1 }}
                        />
                        <TextInput
                            placeholder='Location'
                            onChangeText={setLocation}
                            placeholderTextColor={'#000'}
                            style={{ paddingVertical: 4.5, borderBottomWidth: 1 }}
                        />
                        <TextInput
                            placeholder='TelNo'
                            onChangeText={setTelNo}
                            placeholderTextColor={'#000'}
                            style={{ paddingVertical: 4.5, borderBottomWidth: 1 }}
                            keyboardType='numeric'
                            maxLength={11}
                        />
                    </>
                }
                <Text onPress={CloseModal}>Close</Text>
            </View>
        </Modal>
    )
}

export default ContactModal;
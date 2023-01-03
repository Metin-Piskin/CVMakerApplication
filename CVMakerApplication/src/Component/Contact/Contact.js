import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Contact = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                marginLeft: 5
            }}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default Contact;
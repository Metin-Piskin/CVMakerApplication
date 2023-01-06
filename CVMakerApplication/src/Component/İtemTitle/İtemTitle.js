import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const İtemTitle = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default İtemTitle;
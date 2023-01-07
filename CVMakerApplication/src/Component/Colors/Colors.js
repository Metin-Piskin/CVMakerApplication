import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Colors = ({ color, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                paddingLeft: 4
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    fontSize: 25,
                    color: color.value
                }}
            >
                {color.label}
            </Text>
        </TouchableOpacity>

    )
}

export default Colors;

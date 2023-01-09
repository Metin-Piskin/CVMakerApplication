import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './Colors-style';

const Colors = ({ color, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.colorsContainer}
            onPress={onPress}
        >
            <Text style={[styles.colors, { color: color.value }]}>
                {color.label}
            </Text>
        </TouchableOpacity>

    )
}

export default Colors;

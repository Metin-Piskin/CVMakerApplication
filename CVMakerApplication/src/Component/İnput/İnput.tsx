import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './İnput-style';

interface İnputProps {
    TextName?: string;
    placeholder: string;
    multiline?: boolean;
    onChangeText?: any
}

const İnput: FC<İnputProps> = ({ TextName, placeholder, multiline, onChangeText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textname}>
                {TextName}
            </Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                multiline={multiline}
            />
        </View>
    )
}

export default İnput;
import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './İnput-style';

interface İnputProps {
    TextName?: string;
    placeholder: string;
    multiline?: boolean;
}

const İnput: FC<İnputProps> = ({ TextName, placeholder, multiline }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textname}>
                {TextName}
            </Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                multiline={multiline}
            />
        </View>
    )
}

export default İnput;
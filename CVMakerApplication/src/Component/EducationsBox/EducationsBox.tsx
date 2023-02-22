import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './EducationsBox-style';

interface EducationsBoxProps {
    onChangeText?: any;
}

const EducationsBox: FC<EducationsBoxProps> = ({ onChangeText }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Field of study
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ex: Computer Science'
                    onChangeText={onChangeText}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    School
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='School Name'
                    onChangeText={onChangeText}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Start date
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='When did you start school?'
                    onChangeText={onChangeText}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    End date
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='When did you graduate from school?'
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    )
}

export default EducationsBox;
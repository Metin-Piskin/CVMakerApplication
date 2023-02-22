import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './ExperiencesBox-style';

interface ExperiencesBoxProps {
    onChangeText?: any;
}

const ExperiencesBox: FC<ExperiencesBoxProps> = ({ onChangeText }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Position
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Your position'
                    onChangeText={onChangeText}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Company
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Company name'
                    onChangeText={onChangeText}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Summary
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Brief information of 3-4 sentences about what you do in the company.'
                    onChangeText={onChangeText}
                    multiline={true}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Start date
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='When did you start this job?'
                    onChangeText={onChangeText}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    End date
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Did you quit this job or is it still going?'
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    )
}

export default ExperiencesBox
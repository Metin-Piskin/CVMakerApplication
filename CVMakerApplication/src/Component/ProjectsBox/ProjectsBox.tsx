import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './ProjectsBox-style';

interface ProjectsBoxProps {
    onChangeText?: any;
}

const ProjectsBox: FC<ProjectsBoxProps> = ({ onChangeText }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Project Title
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Project name'
                    onChangeText={onChangeText}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Project Link
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Project Link'
                    onChangeText={onChangeText}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Project Summary
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Project description'
                    onChangeText={onChangeText}
                    multiline={true}
                />
            </View>
        </View>
    )
}

export default ProjectsBox;
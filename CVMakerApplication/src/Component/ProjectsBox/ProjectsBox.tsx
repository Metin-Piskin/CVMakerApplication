import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './ProjectsBox-style';

interface ProjectsBoxProps {
    ProjectTitleonChangeText?: any;
    ProjectTitlevalue?: any;
    ProjectLinkonChangeText?: any;
    ProjectLinkvalue?: any;
    ProjectSummaryonChangeText?: any;
    ProjectSummaryvalue?: any;
}

const ProjectsBox: FC<ProjectsBoxProps> = ({
    ProjectTitleonChangeText,
    ProjectTitlevalue,
    ProjectLinkonChangeText,
    ProjectLinkvalue,
    ProjectSummaryonChangeText,
    ProjectSummaryvalue
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Project Title
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Project name'
                    onChangeText={ProjectTitleonChangeText}
                    value={ProjectTitlevalue}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Project Link
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Project Link'
                    onChangeText={ProjectLinkonChangeText}
                    value={ProjectLinkvalue}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Project Summary
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Project description'
                    onChangeText={ProjectSummaryonChangeText}
                    value={ProjectSummaryvalue}
                    multiline={true}
                />
            </View>
        </View>
    )
}

export default ProjectsBox;
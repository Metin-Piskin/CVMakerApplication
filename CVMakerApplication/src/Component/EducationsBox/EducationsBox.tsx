import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './EducationsBox-style';

interface EducationsBoxProps {
    studyonChangeText?: any;
    studyvalue?: any;
    SchoolonChangeText?: any;
    Schoolvalue?: any;
    StartonChangeText?: any;
    Startvalue?: any;
    EndonChangeText?: any;
    Endvalue?: any;
}

const EducationsBox: FC<EducationsBoxProps> = ({
    studyonChangeText,
    studyvalue,
    SchoolonChangeText,
    Schoolvalue,
    StartonChangeText,
    Startvalue,
    EndonChangeText,
    Endvalue
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Field of study
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ex: Computer Science'
                    onChangeText={studyonChangeText}
                    value={studyvalue}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    School
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='School Name'
                    onChangeText={SchoolonChangeText}
                    value={Schoolvalue}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Start date
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='When did you start school?'
                    onChangeText={StartonChangeText}
                    value={Startvalue}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    End date
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='When did you graduate from school?'
                    onChangeText={EndonChangeText}
                    value={Endvalue}
                />
            </View>
        </View>
    )
}

export default EducationsBox;
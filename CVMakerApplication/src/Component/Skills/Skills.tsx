import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './Skills-style';

interface SkillsProps {
    title: string;
    containerColor: string;
    titleColor: string;
    iconColor: string;
}

const Skills: FC<SkillsProps> = ({ title, containerColor, titleColor, iconColor }) => {
    return (
        <View style={[styles.container, { backgroundColor: containerColor }]}>
            <Text style={[styles.title, { color: titleColor }]}>
                {title}
            </Text>
            <TouchableOpacity>
                <FontAwesome
                    name='close'
                    color={iconColor}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Skills;
import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './PlusButton-style';

interface PlusButtonProps {
    plus?: boolean;
    plusPress?: () => void;
    addPress?: () => void;
    title?: string;
    titleColor?: string;
    backgroundColor?: string;
    borderColor?: string;
}

const PlusButton: FC<PlusButtonProps> = ({ plus, plusPress, addPress, title, titleColor, backgroundColor, borderColor }) => {
    return (
        <>
            {
                plus ? (
                    <TouchableOpacity
                        style={styles.pluscontainer}
                        onPress={plusPress}
                    >
                        <Entypo
                            name='plus'
                            color={'#fff'}
                            size={33}
                        />
                    </TouchableOpacity >
                ) : (
                    <TouchableOpacity
                        style={[styles.addcontainer, { backgroundColor: backgroundColor, borderColor: borderColor }]}
                        onPress={addPress}
                    >
                        <Text style={[styles.addtitle, { color: titleColor }]}>
                            {title}
                        </Text>
                    </TouchableOpacity>
                )
            }
        </>
    )
}

export default PlusButton;
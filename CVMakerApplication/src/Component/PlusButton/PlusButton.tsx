import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './PlusButton-style';

interface PlusButtonProps {
    plus?: boolean;
    plusPress?: () => void;
    addPress?: () => void;
    title?: string
}

const PlusButton: FC<PlusButtonProps> = ({ plus, plusPress, addPress, title }) => {
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
                            color={'#000'}
                            size={33}
                        />
                    </TouchableOpacity >
                ) : (
                    <TouchableOpacity
                        style={styles.addcontainer}
                        onPress={addPress}
                    >
                        <Text>
                            {title}
                        </Text>
                    </TouchableOpacity>
                )
            }
        </>
    )
}

export default PlusButton;
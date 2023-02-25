import React, { FC } from 'react';
import { TouchableOpacity, Image } from 'react-native';

import styles from './TemplatBox-style';

interface TemplatBoxProps {
    onPress: () => void
    status: any
    statusiki: any
}

const TemplatBox: FC<TemplatBoxProps> = ({ onPress, status, statusiki }) => {
    return (
        <TouchableOpacity
            style={[styles.container, status === statusiki && { borderColor: '#12BB82' }]}
            onPress={onPress}
        >
            <Image
                source={require('../../download20210106213250.png')}
                style={styles.image}
            />
        </TouchableOpacity >
    )
}

export default TemplatBox;
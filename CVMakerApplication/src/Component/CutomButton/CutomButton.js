import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './CutomButton-style';

const CutomButton = ({ title, onPress, icon }) => {
    return (
        <>
            {
                icon ? (
                    <TouchableOpacity
                        onPress={onPress}
                        style={styles.iconContainer}
                    >
                        <FontAwesome
                            name='close'
                            color={'#fff'}
                            size={21}
                        />
                    </TouchableOpacity>

                ) : (
                    <TouchableOpacity
                        onPress={onPress}
                        style={styles.titleContainer}
                    >
                        <Text style={styles.title} >
                            {title}
                        </Text>
                    </TouchableOpacity>
                )
            }
        </>
    )
}

export default CutomButton;
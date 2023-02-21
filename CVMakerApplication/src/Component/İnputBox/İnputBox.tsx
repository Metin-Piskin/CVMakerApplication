import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './İnputBox-style';

interface İnputBoxProps {
    title: string;
    onPress: () => void;
    ModalVisible: boolean;
    Modalİtem: any;
}

const İnputBox: FC<İnputBoxProps> = ({ title, onPress, ModalVisible, Modalİtem }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.innercontainer}
                onPress={onPress}
            >
                <Text style={styles.title}>{title}</Text>
                {
                    ModalVisible ? (
                        <MaterialIcons
                            name='keyboard-arrow-down'
                            size={28}
                        />
                    ) : (
                        <MaterialIcons
                            name='keyboard-arrow-right'
                            size={28}
                        />
                    )
                }
            </TouchableOpacity>
            {
                ModalVisible &&
                Modalİtem
            }
        </View>
    )
}

export default İnputBox;
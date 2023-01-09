import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import styles from './Edit-style';
import PaperPage from '../../Component/PaperPage';

const Edit = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backbuttoncontainer}
            >
                <FontAwesome5
                    name='arrow-left'
                    size={30}
                    color={'#fff'}
                />
            </TouchableOpacity>
            <View style={styles.paperpagecontainer} >
                <PaperPage />
            </View>
        </View>
    )
}

export default Edit;
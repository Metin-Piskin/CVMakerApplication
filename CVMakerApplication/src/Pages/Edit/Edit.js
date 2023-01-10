import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import styles from './Edit-style';

import PaperPage from '../../Component/PaperPage/PaperPage';

const Edit = (props) => {
    const { item } = props.route.params;
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={styles.backbuttoncontainer}
            >
                <FontAwesome5
                    name='arrow-left'
                    size={30}
                    color={'#fff'}
                />
            </TouchableOpacity>
            <View style={styles.paperpagecontainer}>
                <PaperPage item={item} />
            </View>
            <TouchableOpacity
                style={styles.pdfdownloadcontainer}
            >
                <FontAwesome5
                    name='cloud-download-alt'
                    size={30}
                    color={'#fff'}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Edit;
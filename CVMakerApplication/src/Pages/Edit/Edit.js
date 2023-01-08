import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import PaperPage from '../../Component/PaperPage';

const Edit = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#9EC7FF' }}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    position: 'absolute',
                    marginTop: 7,
                    marginLeft: 3
                }}
            >
                <FontAwesome5
                    name='arrow-left'
                    size={30}
                    color={'#000'}
                />
            </TouchableOpacity>
            <View
                style={{
                    alignItems: 'center',
                    marginTop: 5,
                }}
            >
                <PaperPage />
            </View>
        </View>
    )
}

export default Edit;
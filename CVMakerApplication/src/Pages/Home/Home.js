import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-evenly'
            }}
        >
            <Text>Home</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('EditScreen')}
            >
                <MaterialCommunityIcons
                    name='gesture-tap-button'
                    size={45}
                    color={'#000'}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Home;
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Lottie from 'lottie-react-native';

const Home = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                backgroundColor: '#9EC7FF'
            }}
        >
            <Lottie
                source={require('../../Component/cv-gif.json')}
                autoPlay
                style={{
                    height: 220,
                }}
            />
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
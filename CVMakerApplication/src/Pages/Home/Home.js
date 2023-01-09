import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Lottie from 'lottie-react-native';

import styles from './Home-style';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Lottie
                source={require('../../Component/cv-gif.json')}
                autoPlay
                style={styles.gif}
            />
            <View style={styles.innerContainer}>

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
        </View>
    )
}

export default Home;
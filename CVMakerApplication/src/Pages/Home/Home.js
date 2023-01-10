import React from 'react';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Lottie from 'lottie-react-native';

import styles from './Home-style';
import oneStyle from '../../Component/PaperPage/PaperPage-onestyle';
import twoStyle from '../../Component/PaperPage/PaperPage-twostyle';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#9EC7FF'}/>
            <Lottie
                source={require('../../Component/cv-gif.json')}
                autoPlay
                style={styles.gif}
            />
            <View style={styles.innerContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('EditScreen', { item: oneStyle })}
                    style={styles.styleButton}
                >
                    <MaterialIcons
                        name='style'
                        size={45}
                        color={'#fff'}
                    />
                    <Text style={styles.styleText}>
                        First Style
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('EditScreen', { item: twoStyle })}
                    style={styles.styleButton}
                >
                    <MaterialIcons
                        name='style'
                        size={45}
                        color={'#fff'}
                    />
                    <Text style={styles.styleText}>
                        Second Style
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;
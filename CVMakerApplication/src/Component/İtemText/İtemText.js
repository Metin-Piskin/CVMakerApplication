import React from 'react';
import { Linking, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const İtemText = ({ title, link, git, logo, githublogo, linkedinlogo }) => {
    return (
        <>
            {
                link ? (
                    <>
                        {
                            git ? (
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:2 }}>
                                    <Ionicons name={githublogo} size={17} color={'#000'} />
                                    <Text
                                        style={{ marginLeft: 5 }}
                                        onPress={() => {
                                            Linking.openURL('https://github.com/' + { title });
                                        }}>
                                        {title}
                                    </Text>
                                </View>
                            ) : (
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:2 }}>
                                    <Ionicons name={linkedinlogo} size={17} color={'#000'} />
                                    <Text
                                        style={{ marginLeft: 5 }}
                                        onPress={() => {
                                            Linking.openURL('https://www.linkedin.com/in/' + { title } + '/');
                                        }}>
                                        {title}
                                    </Text>
                                </View>
                            )
                        }
                    </>
                ) : (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:2 }}>
                        <Ionicons name={logo} size={17} color={'#000'} />
                        <Text
                            style={{ marginLeft: 5 }}
                        >
                            {title}
                        </Text>
                    </View>
                )
            }
        </>
    )
}

export default İtemText;
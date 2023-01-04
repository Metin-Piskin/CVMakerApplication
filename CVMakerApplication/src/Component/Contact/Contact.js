import React from 'react';
import { Linking, Text } from 'react-native';

const Contact = ({ title, link, git }) => {
    return (
        <>
            {
                link ? (
                    <>
                        {
                            git ? (
                                <Text
                                    style={{ marginLeft: 5 }}
                                    onPress={() => {
                                        Linking.openURL('https://github.com/' + { title });
                                    }}>
                                    {title}
                                </Text>
                            ) : (
                                <Text
                                    style={{ marginLeft: 5 }}
                                    onPress={() => {
                                        Linking.openURL('https://www.linkedin.com/in/' + { title } + '/');
                                    }}>
                                    {title}
                                </Text>
                            )
                        }
                    </>
                ) : (
                    <Text
                        style={{ marginLeft: 5 }}
                    >
                        {title}
                    </Text>
                )
            }
        </>
    )
}

export default Contact;
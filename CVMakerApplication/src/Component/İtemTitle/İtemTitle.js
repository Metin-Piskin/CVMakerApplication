import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const İtemTitle = ({
    title,
    onPress,
    IconName,
    IconColor,
    borderColor
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderRightWidth: 1,
                    borderColor: borderColor,
                    borderBottomRightRadius: 5,
                }}
            >
                <View
                    style={{
                        backgroundColor: IconColor,
                        padding: 5,
                        borderRadius: 7,
                        marginBottom: 3
                    }}
                >
                    <FontAwesome5
                        name={IconName}
                        color={'#fff'}
                        size={20}
                    />
                </View>
                <Text
                    style={{
                        color: '#000',
                        fontSize: 20,
                        fontWeight: '500',
                        paddingLeft: 6,
                    }}
                >
                    {title}
                </Text>
            </View>
        </TouchableOpacity >
    )
}

export default İtemTitle;
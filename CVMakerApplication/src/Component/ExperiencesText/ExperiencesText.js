import React from 'react';
import { View, Text } from 'react-native';

const ExperiencesText = ({ item }) => {
    return (
        < View style={{ marginTop: 5 }}>
            {
                item.positionText ? (
                    <Text
                        style={{
                            color: '#000',
                            fontWeight: '500',
                            fontSize: 18,
                            marginHorizontal: 20
                        }}
                    >
                        {item.positionText}
                    </Text >
                ) : (
                    <></>
                )
            }
            {
                item.companyText ? (
                    <Text>
                        {item.companyText}
                    </Text >
                ) : (
                    <></>
                )
            }
            {
                item.summaryText ? (
                    <Text>
                        {item.summaryText}
                    </Text >
                ) : (
                    <></>
                )
            }
            {
                item.experiencesStartDateText ? (
                    <Text
                        style={{
                            textAlign: 'center',
                            right: 18
                        }}
                    >
                        {item.experiencesStartDateText + ' / '}
                    </Text >
                ) : (
                    <></>
                )
            }
            {
                item.experiencesEndDateText ? (
                    <Text
                        style={{
                            justifyContent: 'flex-end',
                            textAlign: 'center',
                            marginTop: -24,
                            left: 18
                        }}
                    >
                        {item.experiencesEndDateText}
                    </Text >
                ) : (
                    <></>
                )
            }
        </View >
    )
}

export default ExperiencesText;
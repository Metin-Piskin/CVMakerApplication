import React from 'react';
import { View, Text } from 'react-native';

const ExperiencesText = ({ item }) => {
    return (
        < View style={{ marginTop: 5 }}>
            {
                item.positionText ? (
                    <Text> {item.positionText}</Text >
                ) : (
                    <></>
                )
            }
            {
                item.companyText ? (
                    <Text> {item.companyText}</Text >
                ) : (
                    <></>
                )
            }
            {
                item.summaryText ? (
                    <Text> {item.summaryText}</Text >
                ) : (
                    <></>
                )
            }
            {
                item.experiencesStartDateText ? (
                    <Text> {item.experiencesStartDateText}</Text >
                ) : (
                    <></>
                )
            }
            {
                item.experiencesEndDateText ? (
                    <Text> {item.experiencesEndDateText}</Text >
                ) : (
                    <></>
                )
            }
        </View >
    )
}

export default ExperiencesText;
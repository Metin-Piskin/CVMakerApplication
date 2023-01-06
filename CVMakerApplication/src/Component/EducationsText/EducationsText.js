import React from 'react';
import { View, Text } from 'react-native';

const EducationsText = ({ item }) => {
    return (
        < View style={{ marginTop: 5 }}>
            {
                item.fieldofStudyText ? (
                    <Text> {item.fieldofStudyText}</Text >
                ) : (
                    <></>
                )
            }
            {
                item.schoolText ? (
                    <Text> {item.schoolText}</Text >
                ) : (
                    <></>
                )
            }
            {
                item.educationsStartDateText ? (
                    <Text> {item.educationsStartDateText}</Text >
                ) : (
                    <></>
                )
            }
            {
                item.educationsEndDateText ? (
                    <Text> {item.educationsEndDateText}</Text >
                ) : (
                    <></>
                )
            }
        </View >
    )
}

export default EducationsText;
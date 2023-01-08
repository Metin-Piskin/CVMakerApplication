import React from 'react';
import { View, Text } from 'react-native';

const EducationsText = ({ item }) => {
    return (
        < View style={{ marginTop: 5, }}>
            {
                item.fieldofStudyText &&
                <Text
                    style={{
                        color: '#000',
                        fontWeight: '500',
                        fontSize: 18,
                        marginHorizontal: 20
                    }}
                >
                    {item.fieldofStudyText}
                </Text >

            }
            {
                item.schoolText &&
                <Text
                    style={{
                        fontSize: 17,
                        textAlign: 'center'
                    }}
                >
                    {item.schoolText}
                </Text >

            }

            {
                item.educationsStartDateText &&
                <Text
                    style={{
                        textAlign: 'center',
                        right: 18
                    }}
                >
                    {item.educationsStartDateText + ' / '}

                </Text >
            }

            {
                item.educationsEndDateText &&
                <Text
                    style={{
                        justifyContent: 'flex-end',
                        textAlign: 'center',
                        marginTop: -24,
                        left: 18
                    }}
                >
                    {item.educationsEndDateText}
                </Text >
            }

        </View >
    )
}

export default EducationsText;
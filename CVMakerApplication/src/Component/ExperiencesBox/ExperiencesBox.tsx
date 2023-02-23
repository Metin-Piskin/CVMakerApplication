import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './ExperiencesBox-style';

interface ExperiencesBoxProps {
    PositiononChangeText?: any;
    Positionvalue?: any;
    CompanyonChangeText?: any;
    Companyvalue?: any;
    SummaryonChangeText?: any;
    Summaryvalue?: any;
    StartdateonChangeText?: any;
    Startdatevalue?: any;
    EnddateonChangeText?: any;
    Enddatevalue?: any;
}

const ExperiencesBox: FC<ExperiencesBoxProps> = ({
    PositiononChangeText,
    Positionvalue,
    CompanyonChangeText,
    Companyvalue,
    SummaryonChangeText,
    Summaryvalue,
    StartdateonChangeText,
    Startdatevalue,
    EnddateonChangeText,
    Enddatevalue
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Position
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Your position'
                    onChangeText={PositiononChangeText}
                    value={Positionvalue}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Company
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Company name'
                    onChangeText={CompanyonChangeText}
                    value={Companyvalue}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Summary
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Brief information of 3-4 sentences about what you do in the company.'
                    onChangeText={SummaryonChangeText}
                    value={Summaryvalue}
                    multiline={true}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    Start date
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='When did you start this job?'
                    onChangeText={StartdateonChangeText}
                    value={Startdatevalue}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>
                    End date
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Did you quit this job or is it still going?'
                    onChangeText={EnddateonChangeText}
                    value={Enddatevalue}
                />
            </View>
        </View>
    )
}

export default ExperiencesBox
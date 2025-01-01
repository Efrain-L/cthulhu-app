import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import useInvestigator from '@/hooks/useInvestigator';
import ThemedText from '@/components/ui/ThemedText';
import ThemedView from '@/components/ui/ThemedView';
import ThemedSafeAreaView from '@/components/ui/ThemedSafeAreaView';

const InvestigatorPossessions = () => {
    const investigator = useInvestigator();

    if (!investigator) {
        return (
            <ThemedSafeAreaView style={styles.container}>
                <ThemedText style={styles.textHeading}>Investigator data could not be read.</ThemedText>
            </ThemedSafeAreaView>
        );
    }

    const gear = investigator.gearPossessions;
    const wealth = investigator.wealth;

    return (
        <ThemedSafeAreaView style={styles.container}>
            <ThemedText style={styles.textHeading}>Investigator Possessions</ThemedText>
            <View style={styles.section}>
                <ThemedText style={styles.sectionHeading}>Wealth</ThemedText>
                <ThemedText>Spending Level: ${wealth.spendingLevel}</ThemedText>
                <ThemedText>Cash: ${wealth.cash}</ThemedText>
                <ThemedText>Monetary Assets: ${wealth.monetaryAssets}</ThemedText>
                <ThemedText>Assets: {wealth.assets}</ThemedText>
            </View>
            <View style={styles.section}>
                <ThemedText style={styles.sectionHeading}>Gear</ThemedText>
                {gear.map((item, index) => (
                    <ThemedText key={index}>{item}</ThemedText>
                ))}
            </View>
        </ThemedSafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textHeading: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
    },
    section: {
        marginVertical: 10,
    },
    sectionHeading: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default InvestigatorPossessions;
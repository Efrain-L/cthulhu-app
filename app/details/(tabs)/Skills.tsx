import ThemedSafeAreaView from '@/components/ui/ThemedSafeAreaView';
import ThemedText from '@/components/ui/ThemedText';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useInvestigator } from '../../../hooks/useInvestigator';
import StatsBar from '@/components/StatsBar';
import SkillList from '@/components/SkillList';
import ThemedView from '@/components/ui/ThemedView';

export default function InvestigatorSkills() {
    const investigator = useInvestigator();

    if (!investigator) {
        return (
            <ThemedView style={styles.container}>
                <ThemedText style={styles.textHeading}>Investigator data could not be read.</ThemedText>
            </ThemedView>
        );
    }

    const stats = investigator.characteristics;

    return (
        <ThemedSafeAreaView style={styles.container}>
            <StatsBar stats={stats} />
            <ThemedText style={styles.textHeading}>Investigator Skills</ThemedText>
            <Text style={styles.textSubheading}>Chance of Success: (Normal | Hard | Extreme)</Text>
            <SkillList investigator={investigator} />
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
    textSubheading: {
        fontSize: 13,
        textAlign: 'right',
        color: 'gray',
        marginRight: 8,
    },
});

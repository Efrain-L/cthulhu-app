import ThemedSafeAreaView from '@/components/ui/ThemedSafeAreaView';
import ThemedText from '@/components/ui/ThemedText';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useInvestigator } from '../../../hooks/useInvestigator';
import StatsBar from '../../../components/StatsBar';
import SkillList from '../../../components/SkillList';
import ThemedView from '@/components/ui/ThemedView';

export default function InvestigatorStats() {
    const investigator = useInvestigator();

    if (!investigator) {
        return (
            <ThemedView style={styles.container}>
                <ThemedText style={styles.text}>Investigator data was not imported correctly.</ThemedText>
            </ThemedView>
        );
    }

    const stats = investigator.characteristics;

    return (
        <ThemedView style={styles.container}>
            <StatsBar stats={stats} />
            <ThemedText style={styles.text}>Investigator Skills</ThemedText>
            <SkillList investigator={investigator} />
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
    },
});

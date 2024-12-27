import ThemedSafeAreaView from '@/components/ui/ThemedSafeAreaView';
import ThemedText from '@/components/ui/ThemedText';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useInvestigator } from '../../../hooks/useInvestigator';
import StatsBar from '../../../components/StatsBar';
import SkillList from '../../../components/SkillList';

export default function InvestigatorStats() {
    const investigator = useInvestigator();

    if (!investigator) {
            return (
                <ThemedSafeAreaView style={styles.container}>
                    <ThemedText style={styles.text}>Investigator data was not imported correctly.</ThemedText>
                </ThemedSafeAreaView>
            );
    }

    const stats = investigator.characteristics;

    return (
        <ThemedSafeAreaView style={styles.container}>
            <StatsBar stats={stats} />
            <ThemedText style={styles.text}>Investigator Skills</ThemedText>
            <SkillList investigator={investigator} />
        </ThemedSafeAreaView>
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

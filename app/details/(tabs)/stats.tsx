import ThemedSafeAreaView from '@/app/components/ui/ThemedSafeAreaView';
import ThemedText from '@/app/components/ui/ThemedText';
import ThemedView from '@/app/components/ui/ThemedView';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useInvestigator } from '../hooks/useInvestigator';

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
            <ThemedView style={styles.statsBar}>
                <ThemedText style={styles.statItem}>STR: {stats.STR}</ThemedText>
                <ThemedText style={styles.statItem}>CON: {stats.CON}</ThemedText>
                <ThemedText style={styles.statItem}>SIZ: {stats.SIZ}</ThemedText>
                <ThemedText style={styles.statItem}>DEX: {stats.DEX}</ThemedText>
                <ThemedText style={styles.statItem}>APP: {stats.APP}</ThemedText>
                <ThemedText style={styles.statItem}>INT: {stats.INT}</ThemedText>
                <ThemedText style={styles.statItem}>POW: {stats.POW}</ThemedText>
                <ThemedText style={styles.statItem}>EDU: {stats.EDU}</ThemedText>
            </ThemedView>
            <ThemedText style={styles.text}>Additional Page Content</ThemedText>
        </ThemedSafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statsBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
    },
    statItem: {
        fontSize: 12,
    },
    text: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
    },
});

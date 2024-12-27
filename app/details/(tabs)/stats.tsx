import ThemedText from '@/app/components/ui/ThemedText';
import ThemedView from '@/app/components/ui/ThemedView';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function InvestigatorStats() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.text}>Stats Component</ThemedText>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
});
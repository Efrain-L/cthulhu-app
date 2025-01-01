import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import useInvestigator from '@/hooks/useInvestigator';
import ThemedText from '@/components/ui/ThemedText';
import ThemedView from '@/components/ui/ThemedView';
import ThemedSafeAreaView from '@/components/ui/ThemedSafeAreaView';

const InvestigatorStatus = () => {
    const investigator = useInvestigator();

    if (!investigator) {
            return (
                <ThemedSafeAreaView style={styles.container}>
                    <ThemedText style={styles.textHeading}>Investigator data could not be read.</ThemedText>
                </ThemedSafeAreaView>
            );
    }

    const attributes = investigator.attributes;

    return (
        <ThemedSafeAreaView style={styles.container}>
            <ThemedText style={styles.textHeading}>Investigator Status</ThemedText>
            <View>
                <ThemedText>Hit Points: {attributes.hitPoints} / {attributes.maxHitPoints}</ThemedText>
            </View>
            <View>
                <ThemedText>Magic Points: {attributes.magicPoints} / {attributes.maxMagicPoints}</ThemedText>
            </View>
            <View>
                <ThemedText>Luck: {attributes.luck} / {attributes.startingLuck}</ThemedText>
            </View>
            <View>
                <ThemedText>Sanity: {attributes.sanity} / {attributes.maxSanity}</ThemedText>
            </View>
            <View>
                <ThemedText>Temporary Insanity: {attributes.tempInsanity ? <ThemedText>Yes</ThemedText> : <ThemedText>No</ThemedText>}</ThemedText>
            </View>
            <View>
                <ThemedText>Indefinite Insanity: {attributes.indefInsanity ? <ThemedText>Yes</ThemedText> : <ThemedText>No</ThemedText>}</ThemedText>
            </View>
            <View>
                <ThemedText>Major Wound: {attributes.majorWound ? <ThemedText>Yes</ThemedText> : <ThemedText>No</ThemedText>}</ThemedText>
            </View>
            <View>
                <ThemedText>Unconscious: {attributes.unconscious ? <ThemedText>Yes</ThemedText> : <ThemedText>No</ThemedText>}</ThemedText>
            </View>
            <View>
                <ThemedText>Dying: {attributes.dying ? <ThemedText>Yes</ThemedText> : <ThemedText>No</ThemedText>}</ThemedText>
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
});

export default InvestigatorStatus;
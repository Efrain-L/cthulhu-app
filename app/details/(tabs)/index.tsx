import ThemedSafeAreaView from '@/components/ui/ThemedSafeAreaView';
import ThemedText from '@/components/ui/ThemedText';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useInvestigator } from '../../../hooks/useInvestigator';

export default function InvestigatorBio() {
    const investigator = useInvestigator();

    if (!investigator) {
        return (
            <ThemedSafeAreaView style={styles.container}>
                <ThemedText style={styles.text}>Investigator data was not imported correctly.</ThemedText>
            </ThemedSafeAreaView>
        );
    }

    const name = investigator.details.name;
    const occupation = investigator.details.occupation;
    const age = investigator.details.age;
    const pronouns = investigator.details.pronouns;
    const residence = investigator.details.residence;
    const birthplace = investigator.details.birthplace;
    const imagePath = investigator.details.imagePath;

    return (
        <ThemedSafeAreaView style={styles.container}>
            <ThemedText style={{marginTop: 20}}>Investigator Bio</ThemedText>
            <Image source={imagePath} style={styles.image} />
            <ThemedText>{name}</ThemedText>
            <ThemedText>{pronouns}</ThemedText>
            <ThemedText>{occupation}</ThemedText>
            <ThemedText>{age}</ThemedText>
            <ThemedText>{residence}</ThemedText>
            <ThemedText>{birthplace}</ThemedText>
        </ThemedSafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "cover",
        borderRadius: 10,
    },
});
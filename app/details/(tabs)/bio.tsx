import ThemedSafeAreaView from '@/components/ui/ThemedSafeAreaView';
import ThemedText from '@/components/ui/ThemedText';
import React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { useInvestigator } from '../../../hooks/useInvestigator';
import ThemedTextInput from '@/components/ui/ThemedTextInput';

export default function InvestigatorBio() {
    const investigator = useInvestigator();

    if (!investigator) {
        return (
            <ThemedSafeAreaView style={styles.container}>
                <ThemedText style={styles.text}>Investigator data was not imported correctly.</ThemedText>
            </ThemedSafeAreaView>
        );
    }

    const { name, occupation, age, pronouns, residence, birthplace, imagePath } = investigator.details;
    const {
        personalDescription,
        ideologyBeliefs,
        significantPeople,
        meaningfulLocations,
        treasuredPossessions,
        traits,
        injuriesScars,
        phobiasManias,
        arcaneTomesSpells,
        encountersWithStrangeEntities
    } = investigator.backstory;

    return (
        <ThemedSafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                <ThemedText style={styles.heading}>Investigator Bio</ThemedText>
                <Image source={imagePath} style={styles.image} />
                
                <ThemedText style={styles.subHeading}>Name</ThemedText>
                <ThemedTextInput style={styles.text} multiline numberOfLines={4} value={name} />
                
                <ThemedText style={styles.subHeading}>Pronouns</ThemedText>
                <ThemedTextInput style={styles.text} multiline numberOfLines={4} value={pronouns} />
                
                <ThemedText style={styles.subHeading}>Occupation</ThemedText>
                <ThemedTextInput style={styles.text} multiline numberOfLines={4} value={occupation} />
                
                <ThemedText style={styles.subHeading}>Age</ThemedText>
                <ThemedTextInput style={styles.text} value={`${age}`} numeric/>
                
                <ThemedText style={styles.subHeading}>Residence</ThemedText>
                <ThemedTextInput style={styles.text} multiline numberOfLines={4} value={residence} />
                
                <ThemedText style={styles.subHeading}>Birthplace</ThemedText>
                <ThemedTextInput style={styles.text} multiline numberOfLines={4} value={birthplace} />
                
                <ThemedText style={styles.subHeading}>Personal Description</ThemedText>
                <ThemedTextInput style={styles.text} multiline numberOfLines={4} value={personalDescription} />
                
                <ThemedText style={styles.subHeading}>Ideology/Beliefs</ThemedText>
                <ThemedTextInput style={styles.text} multiline numberOfLines={4} value={ideologyBeliefs} />
                
                <ThemedText style={styles.subHeading}>Significant People</ThemedText>
                <ThemedTextInput style={styles.text} multiline numberOfLines={4} value={significantPeople} />
                
                <ThemedText style={styles.subHeading}>Meaningful Locations</ThemedText>
                <ThemedTextInput style={styles.text} multiline numberOfLines={4} value={meaningfulLocations} />
                
                <ThemedText style={styles.subHeading}>Treasured Possessions</ThemedText>
                <ThemedTextInput style={styles.text} multiline numberOfLines={4} value={treasuredPossessions} />
                
                <ThemedText style={styles.subHeading}>Traits</ThemedText>
                <ThemedTextInput style={styles.text} multiline numberOfLines={4} value={traits} />
                
                <ThemedText style={styles.subHeading}>Injuries/Scars</ThemedText>
                <ThemedTextInput style={styles.text} multiline numberOfLines={4} value={injuriesScars} />
                
                <ThemedText style={styles.subHeading}>Phobias/Manias</ThemedText>
                <ThemedTextInput style={styles.text} multiline numberOfLines={4} value={phobiasManias} />
                
                <ThemedText style={styles.subHeading}>Arcane Tomes/Spells</ThemedText>
                <ThemedTextInput style={styles.text} multiline numberOfLines={4} value={arcaneTomesSpells} />
                
                <ThemedText style={styles.subHeading}>Encounters with Strange Entities</ThemedText>
                <ThemedTextInput style={styles.text} multiline={true} value={encountersWithStrangeEntities} />
                
            </ScrollView>
        </ThemedSafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        alignItems: 'center',
        padding: 16,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    subHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        marginTop: 8,
        borderWidth: 1,
        padding: 8,
        width: '100%',
        textAlignVertical: 'top',
        height: 100,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "cover",
        borderRadius: 10,
        marginBottom: 16,
    },
});
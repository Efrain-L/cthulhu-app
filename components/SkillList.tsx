import { StyleSheet, ScrollView, View } from 'react-native';
import ThemedView from '@/components/ui/ThemedView';
import ThemedText from '@/components/ui/ThemedText';
import { Investigator } from '@/types/Investigator';

export default function SkillList({ investigator }: { investigator: Investigator }) {
    const skills = investigator.skills;

    return (
        <ThemedView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {Object.entries(skills).map(([key, value]) => (
                    <View key={key} style={styles.skillContainer}>
                        <ThemedText style={styles.skillLabel}>{key}</ThemedText>
                    </View>
                ))}
            </ScrollView>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    skillContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    skillLabel: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    skillValue: {
        fontSize: 14,
    },
});
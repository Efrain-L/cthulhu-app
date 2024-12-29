import { StyleSheet, View } from 'react-native';
import ThemedText from '@/components/ui/ThemedText';
import PressableSkillCheck from './ui/PressableSkillCheck';

type SubskillsListProps = {
    subSkills: { [key: string]: number };
};

export default function SubSkillsList({ subSkills }: SubskillsListProps) {
    return (
        <View style={styles.container}>
            {Object.keys(subSkills).map((skillName) => {
                const skillValue = subSkills[skillName];
                return (
                    <View key={skillName} style={styles.subskillRow}>
                        <ThemedText style={styles.subskillLabel}>{skillName}</ThemedText>
                        <PressableSkillCheck skillName={skillName} skillValue={skillValue} style={styles.skillButton}>
                            <ThemedText style={styles.skillValue}>{skillValue}%</ThemedText>
                            <ThemedText style={styles.skillValue}>|</ThemedText>
                            <ThemedText style={styles.skillValue}>{Math.floor(skillValue/2)}%</ThemedText>
                            <ThemedText style={styles.skillValue}>|</ThemedText>
                            <ThemedText style={styles.skillValue}>{Math.floor(skillValue/4)}%</ThemedText>
                        </PressableSkillCheck>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 30,
    },
    subskillRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingVertical: 10, // added padding
    },
    subskillLabel: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    skillValue: {
        fontSize: 14,
    },
    skillButton: {
        backgroundColor: '#00cc66',
        borderRadius: 5,
        width: 150, // fixed width
        height: 60, // fixed height
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});

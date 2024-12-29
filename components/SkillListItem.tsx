import { StyleSheet, View } from 'react-native';
import ThemedText from '@/components/ui/ThemedText';
import SubSkillsList from '@/components/SubSkillList';
import PressableSkillCheck from '@/components/ui/PressableSkillCheck';

type SkillListItemProps = {
    skillName: string;
    skillValue: number | { [key: string]: number };
};

export default function SkillListItem({ skillName, skillValue }: SkillListItemProps) {
    const isSpecialized = typeof skillValue === 'object';
    const defaultValue = isSpecialized && 'Default' in skillValue ? skillValue.Default : null;

    // determine the value to display (either default or normal skill value)
    const valueToDisplay = defaultValue !== null ? defaultValue : (isSpecialized ? null : skillValue);

    // create subskills excluding the 'Default' value
    const subSkills = isSpecialized
        ? Object.fromEntries(Object.entries(skillValue).filter(([key]) => key !== 'Default'))
        : null;

    return (
        <View style={styles.container}>
            <View style={styles.skillRow}>
                <ThemedText style={styles.skillLabel}>{skillName}</ThemedText>
                {valueToDisplay !== null ? (
                    <PressableSkillCheck skillName={skillName} skillValue={valueToDisplay} style={styles.skillButton}>
                        <ThemedText style={styles.skillValue}>{valueToDisplay}%</ThemedText>
                        <ThemedText style={styles.skillValue}>|</ThemedText>
                        <ThemedText style={styles.skillValue}>{Math.floor(valueToDisplay/2)}%</ThemedText>
                        <ThemedText style={styles.skillValue}>|</ThemedText>
                        <ThemedText style={styles.skillValue}>{Math.floor(valueToDisplay/4)}%</ThemedText>
                    </PressableSkillCheck>
                ) : (
                    <View style={styles.placeholderButton} />
                )}
            </View>
            {subSkills && <SubSkillsList subSkills={subSkills} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    skillRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    skillLabel: {
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
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    placeholderButton: {
        height: 50, 
    },
});
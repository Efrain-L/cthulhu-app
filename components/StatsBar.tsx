import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ThemedView from '@/components/ui/ThemedView';
import ThemedText from '@/components/ui/ThemedText';
import PressableSkillCheck from '@/components/ui/PressableSkillCheck';

type StatsProps = {
    stats: {
        STR: number;
        CON: number;
        SIZ: number;
        DEX: number;
        APP: number;
        INT: number;
        POW: number;
        EDU: number;
    };
};

export default function StatsBar({ stats }: StatsProps) {
    return (
        <ThemedView>
            <View style={styles.statsBar}>
                {Object.entries(stats).map(([key, _value]) => (
                    <TouchableOpacity key={key} style={styles.statContainer}>
                        <ThemedText style={styles.statLabelText}>{key}</ThemedText>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.statsBar}>
                {Object.entries(stats).map(([key, value]) => (
                    <PressableSkillCheck key={key} style={styles.statContainer} skillName={key} skillValue={value}>
                        <ThemedText style={styles.statValueText}>{value}</ThemedText>
                    </PressableSkillCheck>
                ))}
            </View>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    statsBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5,
        borderBottomWidth: 3,
        borderBottomColor: '#00cc66'
    },
    statContainer: {
        margin: 10,
    },
    statLabelText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    statValueText: {
        fontSize: 14,
    },
});
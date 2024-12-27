import { StyleSheet, View } from 'react-native';
import ThemedView from '@/app/components/ui/ThemedView';
import ThemedText from '@/app/components/ui/ThemedText';

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
        <ThemedView style={styles.statsBar}>
            {Object.entries(stats).map(([key, value]) => (
                <View key={key} style={styles.statContainer}>
                    <ThemedText style={styles.statLabel}>{key}</ThemedText>
                    <ThemedText style={styles.statValue}>{value}</ThemedText>
                </View>
            ))}
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    statsBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 5,
        borderBottomColor: '#00cc66'
    },
    statContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    statValue: {
        fontSize: 14,
    },
});
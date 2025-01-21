import ThemedSafeAreaView from '@/components/ui/ThemedSafeAreaView';
import ThemedText from '@/components/ui/ThemedText';
import { StyleSheet } from 'react-native';

export default function PointBuyStats() {
    return (
        <ThemedSafeAreaView style={styles.safeView}>
            <ThemedText>Skill Select Component</ThemedText>
        </ThemedSafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
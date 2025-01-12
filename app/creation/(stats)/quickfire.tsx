import ThemedSafeAreaView from '@/components/ui/ThemedSafeAreaView';
import ThemedText from '@/components/ui/ThemedText';
import { StyleSheet, View } from 'react-native';

export default function QuickFireStats() {
    return (
        <ThemedSafeAreaView style={styles.safeView}>
            <View style={styles.headerContainer}>
                <ThemedText style={styles.headerText}>Quick Fire Component</ThemedText>
            </View>
            <View style={styles.statSelectContainer}>
                <ThemedText>STR:</ThemedText>
            </View>
        </ThemedSafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeView: {
        justifyContent: 'flex-start',
    },
    headerContainer: {
        width: '100%',
        padding: 10,
    },
    headerText: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    statSelectContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        borderWidth: 1,
    }
});
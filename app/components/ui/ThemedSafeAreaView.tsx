import { SafeAreaView, type ViewProps, StyleSheet, useColorScheme } from 'react-native';

export default function ThemedSafeAreaView( { style, children }: ViewProps) {
    const colorScheme = useColorScheme();
    const backgroundStyle = colorScheme === 'dark' ? styles.darkView : styles.lightView;
    return (
        <SafeAreaView style={[backgroundStyle, style]}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    lightView: {
        backgroundColor: "#dee4e7",
    },
      darkView: {
        backgroundColor: "#242c40",
    },
});
import { StatusBar } from 'react-native';
import { SafeAreaView, type ViewProps, StyleSheet, useColorScheme, Platform } from 'react-native';

export default function ThemedSafeAreaView( { style, children }: ViewProps) {
    const colorScheme = useColorScheme();
    const backgroundStyle = colorScheme === 'dark' ? styles.darkView : styles.lightView;
    const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

    return (
        <SafeAreaView style={[{ paddingTop: statusBarHeight }, backgroundStyle, style]}>
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
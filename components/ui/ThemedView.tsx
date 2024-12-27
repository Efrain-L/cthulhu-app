import { View, type ViewProps, StyleSheet, useColorScheme } from 'react-native';

export default function ThemedView( { style, children }: ViewProps) {
    const colorScheme = useColorScheme();
    const backgroundStyle = colorScheme === 'dark' ? styles.darkView : styles.lightView;
    return (
        <View style={[style, backgroundStyle]}>
            {children}
        </View>
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
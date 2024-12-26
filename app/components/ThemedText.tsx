import { Text, type TextProps, StyleSheet, useColorScheme } from 'react-native';

export default function ThemedText( { style, children }: TextProps) {
    const colorScheme = useColorScheme();
    const textStyle = colorScheme === 'dark' ? styles.darkThemeText : styles.lightThemeText;
    return (
        <Text style={[style, textStyle]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    lightThemeText: {
        color: "black",
    },
    darkThemeText: {
        color: "white",
    }
});
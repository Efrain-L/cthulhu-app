import { TextInput, type TextInputProps, StyleSheet, useColorScheme } from 'react-native';

export default function ThemedTextInput( { style, placeholder, children }: TextInputProps) {
    const colorScheme = useColorScheme();
    const textStyle = colorScheme === 'dark' ? styles.darkThemeText : styles.lightThemeText;
    const borderThemeStyle = { borderColor: colorScheme === 'dark' ? "white" : "black" };
    const placeholderTextColor = colorScheme === 'dark' ? "gray" : "darkgray";

    return (
        <TextInput style={[style, textStyle, borderThemeStyle]} placeholder={placeholder} placeholderTextColor={placeholderTextColor}>
            {children}
        </TextInput>
    );
}

const styles = StyleSheet.create({
    lightThemeText: {
        color: "black",
    },
    darkThemeText: {
        color: "white",
    },
});
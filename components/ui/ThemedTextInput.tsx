import { useState } from 'react';
import { TextInput, TextInputProps, StyleSheet, useColorScheme } from 'react-native';

interface ThemedTextInputProps extends TextInputProps {
    numeric?: boolean;
}

export default function ThemedNumericInput({
    style,
    placeholder,
    value,
    onChangeText,
    multiline = false,
    numeric = false,
    children,
}: ThemedTextInputProps) {
    const colorScheme = useColorScheme();
    const textStyle = colorScheme === 'dark' ? styles.darkThemeText : styles.lightThemeText;
    const borderThemeStyle = { borderColor: colorScheme === 'dark' ? 'white' : 'black' };
    const placeholderTextColor = colorScheme === 'dark' ? 'gray' : 'darkgray';

    const [text, setText] = useState(value || '');
    const [height, setHeight] = useState(40); // default height
    
    const handleChangeText = (inputText: string) => {
        const processedText = numeric ? inputText.replace(/[^0-9]/g, '') : inputText;
        setText(processedText);
        
        if (onChangeText) {
            onChangeText(processedText);
        }
    };

    const handleContentSizeChange = (event: any) => {
        if (multiline) {
            setHeight(event.nativeEvent.contentSize.height);
        }
    };

    return (
        <TextInput
            style={[
                style,
                textStyle,
                borderThemeStyle,
                { height: Math.max(40, height) },
            ]}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            value={text}
            onChangeText={handleChangeText}
            multiline={multiline}
            keyboardType={numeric ? 'numeric' : 'default'}
            onContentSizeChange={handleContentSizeChange} // adjusting height dynamically for multiline
        >
            {children}
        </TextInput>
    );
}

const styles = StyleSheet.create({
    lightThemeText: {
        color: 'black',
    },
    darkThemeText: {
        color: 'white',
    },
});

import { StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function CreateInvestigator() {
    const colorScheme = useColorScheme();
    const containerThemeStyle = colorScheme === 'dark' ? styles.darkThemeContainer : styles.lightThemeContainer;
    const textThemeStyle = colorScheme === 'dark' ? styles.darkThemeText : styles.lightThemeText;
    const borderThemeStyle = { borderColor: colorScheme === 'dark' ? "white" : "black" };
    const placeholderTextColor = colorScheme === 'dark' ? "gray" : "darkgray";
    
    return (
        <SafeAreaView style={[styles.container, containerThemeStyle]}>
          <Text style={[textThemeStyle, {margin: 20}]}>Create a New Character</Text>
          <TextInput style={[styles.input, textThemeStyle, borderThemeStyle]} placeholder="Character Name" placeholderTextColor={placeholderTextColor}/>
          <TextInput style={[styles.input, textThemeStyle, borderThemeStyle]} placeholder="Character Description" placeholderTextColor={placeholderTextColor} />
          <TextInput style={[styles.input, textThemeStyle, borderThemeStyle]} placeholder="Character Age" placeholderTextColor={placeholderTextColor} />
          <TextInput style={[styles.input, textThemeStyle, borderThemeStyle]} placeholder="Character Occupation" placeholderTextColor={placeholderTextColor} />
          <TextInput style={[styles.input, textThemeStyle, borderThemeStyle]} placeholder="Character Location" placeholderTextColor={placeholderTextColor} />
          <TouchableOpacity style={[styles.button]} onPress={() => router.push("/")}>
              <Text style={styles.buttonTextColor}>Save Character</Text>
          </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    lightThemeContainer: {
      backgroundColor: "#dee4e7",
    },
    darkThemeContainer: {
      backgroundColor: "#242c40",
    },
    lightThemeText: {
      color: "black",
    },
    darkThemeText: {
      color: "white",
    },
    button: {
      backgroundColor: "#00cc66",
      padding: 10,
      margin: 30,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
    }, 
    buttonTextColor: {
      color: "white",
    },
    input: {
      height: 40,
      width: 300,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
    }
  });
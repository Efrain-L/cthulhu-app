import { Modal, StyleSheet, TouchableOpacity } from 'react-native';
import ThemedText from "@/components/ui/ThemedText";
import ThemedView from '@/components/ui/ThemedView';
import ThemedTextInput from '@/components/ui/ThemedTextInput';
import ThemedSafeAreaView from '@/components/ui/ThemedSafeAreaView';
import { router } from 'expo-router';


export default function CreateInvestigatorDetails() {
  return (
        <ThemedSafeAreaView style={styles.safeView}>
            <ThemedText style={{margin: 20}}>Creating a new Investigator</ThemedText>
            <ThemedTextInput style={styles.input} placeholder="Character Name"/>
            <ThemedTextInput style={styles.input} placeholder="Character Description" />
            <ThemedTextInput style={styles.input} placeholder="Character Age" numeric />
            <ThemedTextInput style={styles.input} placeholder="Character Occupation" />
            <ThemedTextInput style={styles.input} placeholder="Character Location" />
            <TouchableOpacity onPress={() => {router.back()}}>
                <ThemedText>Continue</ThemedText>
            </TouchableOpacity>
        </ThemedSafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: 300,
        margin: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    }
});
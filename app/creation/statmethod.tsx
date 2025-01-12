import { StyleSheet, TouchableOpacity } from 'react-native';
import ThemedText from "@/components/ui/ThemedText";
import ThemedTextInput from '@/components/ui/ThemedTextInput';
import ThemedSafeAreaView from '@/components/ui/ThemedSafeAreaView';
import { router } from 'expo-router';
import { useState } from 'react';
import useInvestigator from '@/hooks/useInvestigator';


export default function SelectStatMethod() {
    const investigator = useInvestigator();
    console.log(investigator?.details);
    

    return (
        <ThemedSafeAreaView style={styles.safeView}>
            <ThemedText style={styles.topText}>Choose a method to generate your investigator's stats</ThemedText>
            <TouchableOpacity style={styles.button} onPress={() => {router.navigate("/creation/(stats)/quickfire")}}>
                <ThemedText style={styles.buttonText}>Quick Fire Method</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {router.navigate("/creation/(stats)/rolled")}}>
                <ThemedText style={styles.buttonText}>Rolled Stats</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {router.navigate("/creation/(stats)/pointbuy")}}>
                <ThemedText style={styles.buttonText}>Point Buy</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => {router.back()}}>
                <ThemedText>Back</ThemedText>
            </TouchableOpacity>
        </ThemedSafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    topText: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        height: 80,
        width: 150,
        margin: 15,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#00cc66",
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    backButton: {
        borderRadius: 5,
        backgroundColor: "#00cc66",
        padding: 10,
    }
});
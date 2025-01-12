import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import ThemedText from "@/components/ui/ThemedText";
import ThemedTextInput from '@/components/ui/ThemedTextInput';
import ThemedSafeAreaView from '@/components/ui/ThemedSafeAreaView';
import { router } from 'expo-router';
import { useState } from 'react';
import useInvestigator from '@/hooks/useInvestigator';


export default function CreateInvestigatorDetails() {
    const investigator = useInvestigator();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [residence, setResidence] = useState('');
    const [birthplace, setBirthplace] = useState('');

    const saveDetails = () => {
        if (!name || !age) {
            alert("Name and Age are required fields");
            return;
        }
        if (parseInt(age) < 15) {
            alert("Minimum investigator age is 15");
            return;
        }
        if (investigator) {
            investigator.details.name = name;
            investigator.details.age = parseInt(age);
            investigator.details.pronouns = pronouns;
            investigator.details.residence = residence;
            investigator.details.birthplace = birthplace;
            router.navigate("/creation/statmethod");
        }
    }

    return (
        <ThemedSafeAreaView style={styles.safeView}>
            <ThemedText style={{margin: 20}}>Creating a new Investigator</ThemedText>
            <View style={styles.inputContainer}>
                <ThemedText>Investigator Name<Text style={{color: "red"}}>*</Text></ThemedText>
                <ThemedTextInput style={styles.input} placeholder="Name" onChangeText={setName}/>
            </View>
            <View style={styles.inputContainer}>
                <ThemedText>Investigator Age<Text style={{color: "red"}}>*</Text></ThemedText>
                <ThemedTextInput style={styles.input} placeholder="Age" numeric onChangeText={setAge}/>
            </View>
            <View style={styles.inputContainer}>
                <ThemedText>Investigator Pronouns</ThemedText>
                <ThemedTextInput style={styles.input} placeholder="Pronouns" onChangeText={setPronouns}/>
            </View>
            <View style={styles.inputContainer}>
                <ThemedText>Investigator Residence</ThemedText>
                <ThemedTextInput style={styles.input} placeholder="Residence" onChangeText={setResidence}/>
            </View>
            <View style={styles.inputContainer}>
                <ThemedText>Investigator Birthplace</ThemedText>
                <ThemedTextInput style={styles.input} placeholder="Birthplace" onChangeText={setBirthplace}/>
            </View>
            
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width:200}}>
                <TouchableOpacity style={styles.button} onPress={() => {router.back()}}>
                    <ThemedText>Back</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {saveDetails();}}>
                    <ThemedText>Next</ThemedText>
                </TouchableOpacity>
            </View>
            
        </ThemedSafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer:{
        marginBottom: 20,
    },
    input: {
        width: 300,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    button: {
        borderRadius: 5,
        backgroundColor: "#00cc66",
        padding: 10,
    }
});
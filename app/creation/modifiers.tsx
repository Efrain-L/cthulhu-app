import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ThemedSafeAreaView from '@/components/ui/ThemedSafeAreaView';
import ThemedText from '@/components/ui/ThemedText';
import useInvestigator from '@/hooks/useInvestigator';
import { useEffect, useState } from 'react';
import ThemedView from '@/components/ui/ThemedView';

type CharacteristicKey = "STR" | "CON" | "SIZ" | "DEX" | "APP" | "INT" | "POW" | "EDU";

export default function ModifierUpdate() {
    const investigator = useInvestigator();
    if (investigator === null) {
        return (
            <ThemedSafeAreaView>
                <ThemedText>Error: Investigator not found</ThemedText>
            </ThemedSafeAreaView>
        );
    }

    const age = investigator.details.age;
    useEffect(() => {
        if (age <= 19) {
            setDeductPoints(5);
            setMaxDeductPoints(5);
        } else if (age <= 39) {
            // Add logic for this age group if necessary
        } else if (age <= 49) {
            // Add logic for this age group
        } else if (age <= 59) {
            // Add logic for this age group
        } else if (age <= 69) {
            // Add logic for this age group
        } else if (age <= 79) {
            // Add logic for this age group
        } else if (age <= 89) {
            // Add logic for this age group
        }
    }, [age]);

    const [deductPoints, setDeductPoints] = useState(0);
    const [maxDeductPoints, setMaxDeductPoints] = useState(0);
    const [characteristics, setCharacteristics] = useState({
        "STR": investigator.characteristics.STR,
        "CON": investigator.characteristics.CON,
        "SIZ": investigator.characteristics.SIZ,
        "DEX": investigator.characteristics.DEX,
        "APP": investigator.characteristics.APP,
        "INT": investigator.characteristics.INT,
        "POW": investigator.characteristics.POW,
        "EDU": investigator.characteristics.EDU,
    });

    const StatDeductRow = ({ stat }: { stat: CharacteristicKey }) => {
        const updateStat = (value: number) => {
            setCharacteristics((prev) => {
                const updatedStat = Math.max(0, (prev[stat] || 0) + value);
                return { ...prev, [stat]: updatedStat };
            });
            setDeductPoints((prev) => Math.max(0, prev + value)); // Update deduct points
        };
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 400 }}>
                <ThemedText style={{fontWeight: "bold", width: 60, paddingTop: 10}}>{stat}: {characteristics[stat]}</ThemedText>
                <TouchableOpacity
                    style={[styles.deductButton, {opacity: deductPoints - 10 < 0 || characteristics[stat] <= 0 ? 0.5 : 1}]}
                    onPress={() => updateStat(-10)}
                    disabled={deductPoints - 10 < 0 || characteristics[stat] <= 0}
                >
                    <ThemedText>-10</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.deductButton, {opacity: deductPoints - 5 < 0 || characteristics[stat] <= 0 ? 0.5 : 1}]}
                    onPress={() => updateStat(-5)}
                    disabled={deductPoints - 5 < 0 || characteristics[stat] <= 0}
                >
                    <ThemedText>-5</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.deductButton, {opacity: deductPoints - 1 < 0 || characteristics[stat] <= 0 ? 0.5 : 1}]}
                    onPress={() => updateStat(-1)}
                    disabled={deductPoints - 1 < 0 || characteristics[stat] <= 0}
                >
                    <ThemedText>-1</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.deductButton, {opacity: deductPoints + 1 > maxDeductPoints ? 0.5 : 1}]}
                    onPress={() => updateStat(1)}
                    disabled={deductPoints + 1 > maxDeductPoints}
                >
                    <ThemedText>+1</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.deductButton, {opacity: deductPoints + 5 > maxDeductPoints ? 0.5 : 1}]}
                    onPress={() => updateStat(5)}
                    disabled={deductPoints + 5 > maxDeductPoints}
                >
                    <ThemedText>+5</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.deductButton, {opacity: deductPoints + 10 > maxDeductPoints ? 0.5 : 1}]}
                    onPress={() => updateStat(10)}
                    disabled={deductPoints + 10 > maxDeductPoints}
                >
                    <ThemedText>+10</ThemedText>
                </TouchableOpacity>
            </View>
        );
    };

    const age15to19 = () => {
        return (
            <ThemedView style={styles.modifyContainer}>
                <ThemedText style={{fontWeight: "bold"}}>5 points must be deducted from EDU.</ThemedText>
                <ThemedText style={{fontWeight: "bold"}}>Luck will be rolled twice</ThemedText>
                <ThemedText style={{fontWeight: "bold"}}>Deduct {deductPoints} from STR, and/or SIZ:</ThemedText>
                <StatDeductRow stat="STR"/>
                <StatDeductRow stat="SIZ"/>
            </ThemedView>
        )
    }
    const age20to39 = () => {
        return (
            <View>
            </View>
        );
    }
    const age40to49 = () => {
        return (
            <View>
            </View>
        );
    }
    const age50to59 = () => {
        return (
            <View>
            </View>
        );
    }
    const age60to69 = () => {
        return (
            <View>
            </View>
        );
    }
    const age70to79 = () => {
        return (
            <View>
            </View>
        );
    }
    const age80to89 = () => {
        return (
            <View>
            </View>
        );
    }

    return (
        <ThemedSafeAreaView style={styles.safeView}>
            <ThemedText style={styles.headerText}>Modifiers Component</ThemedText>
            <ThemedText style={{textAlign: "center", marginTop: 20}}>Your investigator's stats will undergo modifications based on their age</ThemedText>
            <ThemedText style={{textAlign: "center", marginTop: 20}}>Investigator's Age: {age}</ThemedText>
            <ThemedText style={{textAlign: "center", marginTop: 20}}>Because of your investigator's age, the following modifications must be applied:</ThemedText>
            {age !== undefined && (
                age <= 19 ? age15to19() : 
                age <= 39 ? age20to39() :
                age <= 49 ? age40to49() :
                age <= 59 ? age50to59() :
                age <= 69 ? age60to69() :
                age <= 79 ? age70to79() : age80to89()
            )}
        </ThemedSafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeView: {
        alignItems: 'center',
        padding: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    deductButton: {
        borderRadius: 5,
        backgroundColor: "#00cc66",
        padding: 10,
        width: 45,
        height: 45,
    },
    modifyContainer: {
        marginTop: 20,
        height: 400,
        justifyContent: "space-around",
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
    }
});
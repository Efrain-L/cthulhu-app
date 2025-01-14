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
    const [statPoints, setStatPoints] = useState({
        "STR": 0,
        "CON": 0,
        "SIZ": 0,
        "DEX": 0,
        "APP": 0,
        "INT": 0,
        "POW": 0,
        "EDU": 0,
    });

    const age = investigator.details.age;
    useEffect(() => {
        if (age <= 19) {
            setRemainingPoints(5);
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

    const [maxPoints, setMaxPoints] = useState(0);
    const [remainingPoints, setRemainingPoints] = useState(0);
    const pointsAllocated = Object.values(statPoints).reduce((a, b) => a + b, 0);
    

    const StatDeductRow = ({ stat }: { stat: CharacteristicKey }) => {
        const allocate = (delta: number) => {
            return remainingPoints - delta >= 0;
        };
        const deallocate = (stat: CharacteristicKey, delta: number) => {
            return statPoints[stat] >= delta;
        }
        const allocatePoints = (stat: CharacteristicKey, delta: number) => {
            // if there are enough points remaining, subtract from remaining points
            if (allocate(delta)) {
                setStatPoints({ ...statPoints, [stat]: statPoints[stat] + delta });
                setRemainingPoints(remainingPoints - delta);
            }
        }
        const deallocatePoints = (stat: CharacteristicKey, delta: number) => {
            if (deallocate(stat, delta)) {
                setStatPoints({ ...statPoints, [stat]: statPoints[stat] - delta });
                setRemainingPoints(remainingPoints + delta);
            }
        }

        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 400 }}>
                <ThemedText style={{fontWeight: "bold", width: 60, paddingTop: 10}}>{stat}: {investigator.characteristics[stat]-statPoints[stat]}</ThemedText>
                <TouchableOpacity
                    style={[styles.deductButton, {opacity: !allocate(10) ? 0.5 : 1}]}
                    onPress={() => allocatePoints(stat, 10)}
                    disabled={!allocate(10)}
                >
                    <ThemedText>-10</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.deductButton, {opacity: !allocate(5) ? 0.5 : 1}]}
                    onPress={() => allocatePoints(stat, 5)}
                    disabled={!allocate(5)}
                >
                    <ThemedText>-5</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.deductButton, {opacity: !allocate(1) ? 0.5 : 1}]}
                    onPress={() => allocatePoints(stat, 1)}
                    disabled={!allocate(1)}
                >
                    <ThemedText>-1</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.deductButton, {opacity: !deallocate(stat, 1) ? 0.5 : 1}]}
                    onPress={() => deallocatePoints(stat, 1)}
                    disabled={!deallocate(stat, 1)}
                >
                    <ThemedText>+1</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.deductButton, {opacity: !deallocate(stat, 5) ? 0.5 : 1}]}
                    onPress={() => deallocatePoints(stat, 5)}
                    disabled={!deallocate(stat, 5)}
                >
                    <ThemedText>+5</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.deductButton, {opacity: !deallocate(stat, 10) ? 0.5 : 1}]}
                    onPress={() => deallocatePoints(stat, 10)}
                    disabled={!deallocate(stat, 10)}
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
                <ThemedText style={{fontWeight: "bold"}}>Deduct {remainingPoints} from STR, and/or SIZ:</ThemedText>
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
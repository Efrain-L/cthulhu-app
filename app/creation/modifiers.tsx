import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import ThemedSafeAreaView from '@/components/ui/ThemedSafeAreaView';
import ThemedText from '@/components/ui/ThemedText';
import useInvestigator from '@/hooks/useInvestigator';
import { useEffect, useState } from 'react';
import ThemedView from '@/components/ui/ThemedView';
import { router } from 'expo-router';

type CharacteristicKey = "STR" | "CON" | "SIZ" | "DEX" | "APP" | "INT" | "POW" | "EDU";
type EduRollResult = {
    success: boolean;
    roll: number;
    improvement: number;
    newEDU: number;
}

export default function ModifierUpdate() {
    const investigator = useInvestigator();
    if (investigator === null) {
        return (
            <ThemedSafeAreaView>
                <ThemedText>Error: Investigator not found</ThemedText>
            </ThemedSafeAreaView>
        );
    }

    const [statPoints, setStatPoints] = useState({"STR": 0,"CON": 0,"SIZ": 0,"DEX": 0,"APP": 0,"INT": 0,"POW": 0,"EDU": 0});
    const [remainingPoints, setRemainingPoints] = useState(0);

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
            </View>
        );
    };

    const age = investigator.details.age;
    useEffect(() => {
        if (age !== undefined) {
            if (age <= 19) {
                setRemainingPoints(5);
            } else if (age <= 39) {
                setRemainingPoints(0);
            } else if (age <= 49) {
                setRemainingPoints(5);
            } else if (age <= 59) {
                setRemainingPoints(10);
            } else if (age <= 69) {
                setRemainingPoints(20);
            } else if (age <= 79) {
                setRemainingPoints(40);
            } else {
                setRemainingPoints(80);
            }
        }
    }, [age]);

    const eduImprovementCheck = (EDU: number): EduRollResult => {
        console.log(`Improving EDU from ${EDU}`);
        const roll = Math.floor(Math.random() * 100) + 1;
        if (roll > EDU) {
            const improvement = Math.floor(Math.random() * 10) + 1;
            return {
                success: true,
                roll,
                improvement,
                newEDU: EDU + improvement,
            };
        } else {
            return {
                success: false,
                roll,
                improvement: 0,
                newEDU: EDU,
            };
        }
    };

    const age15to19 = () => {``
        return (
            <ThemedView style={styles.modifyContainer}>
                <ThemedText style={{fontWeight: "bold"}}><Text style={{color:  "lightgreen"}}>5</Text> points must be deducted from EDU.</ThemedText>
                <ThemedText style={{fontWeight: "bold"}}>Luck will be rolled twice</ThemedText>
                <ThemedText style={{fontWeight: "bold"}}>Deduct <Text style={{color:  "lightgreen"}}>{remainingPoints}</Text> points from STR, and/or SIZ:</ThemedText>
                <StatDeductRow stat="STR"/>
                <StatDeductRow stat="SIZ"/>
            </ThemedView>
        );
    };
    const age20to39 = () => {
        const [eduCheckResults, setEduCheckResults] = useState<EduRollResult[]>([]);
        useEffect(() => {
            const checks = [];
            let updatedEDU = investigator.characteristics.EDU;
            // Perform two improvement checks
            for (let i = 0; i < 1; i++) {
                const result = eduImprovementCheck(updatedEDU);
                checks.push(result);
                if (result.success) {
                    updatedEDU = result.newEDU; // Update EDU only on success
                }
            }
            setEduCheckResults(checks);
            // Update the investigator's EDU with the final value
            investigator.characteristics.EDU = updatedEDU;
        }, [investigator]);
        return (
            <ThemedView style={styles.modifyContainer}>
                <ThemedText style={{fontWeight: "bold"}}>Making <Text style={{color:  "lightgreen"}}>1</Text> improvement check for EDU:</ThemedText>
                {eduCheckResults.map((result, index) => (
                    <ThemedText key={index}>
                        Rolled:{" "}
                        <Text style={{ color: "lightgreen" }}>{result.roll}</Text>{" "}
                        - {result.success ? `Success, EDU increased by ${result.improvement}` : "Failed, EDU remains the same"}
                    </ThemedText>
                ))}
            </ThemedView>
        );
    };
    const age40to49 = () => {
        const [eduCheckResults, setEduCheckResults] = useState<EduRollResult[]>([]);
        useEffect(() => {
            const checks = [];
            let updatedEDU = investigator.characteristics.EDU;
            // Perform two improvement checks
            for (let i = 0; i < 2; i++) {
                const result = eduImprovementCheck(updatedEDU);
                checks.push(result);
                if (result.success) {
                    updatedEDU = result.newEDU; // Update EDU only on success
                }
            }
            setEduCheckResults(checks);
            // Update the investigator's EDU with the final value
            investigator.characteristics.EDU = updatedEDU;
        }, [investigator]);

        return (
            <ThemedView style={styles.modifyContainer}>
                <ThemedText style={{fontWeight: "bold"}}><Text style={{color:  "lightgreen"}}>5</Text> points must be deducted from APP</ThemedText>
                <ThemedText style={{fontWeight: "bold"}}>Making <Text style={{color:  "lightgreen"}}>2</Text> improvement checks for EDU:</ThemedText>
                {eduCheckResults.map((result, index) => (
                    <ThemedText key={index}>
                        Rolled:{" "}
                        <Text style={{ color: "lightgreen" }}>{result.roll}</Text>{" "}/{" "}<Text style={{ color: "lightgreen" }}>{result.newEDU-result.improvement}</Text>
                        - {result.success ? `Success, EDU increased by ${result.improvement}` : "Failed, EDU remains the same"}
                    </ThemedText>
                ))}
                <ThemedText style={{fontWeight: "bold"}}>Deduct <Text style={{color:  "lightgreen"}}>{remainingPoints}</Text> points from STR, CON, and/or DEX:</ThemedText>
                <StatDeductRow stat="STR"/>
                <StatDeductRow stat="CON"/>
                <StatDeductRow stat="DEX"/>
            </ThemedView>
        );
    };
    const age50to59 = () => {
        const [eduCheckResults, setEduCheckResults] = useState<EduRollResult[]>([]);
        useEffect(() => {
            const checks = [];
            let updatedEDU = investigator.characteristics.EDU;
            // Perform two improvement checks
            for (let i = 0; i < 3; i++) {
                const result = eduImprovementCheck(updatedEDU);
                checks.push(result);
                if (result.success) {
                    updatedEDU = result.newEDU; // Update EDU only on success
                }
            }
            setEduCheckResults(checks);
            // Update the investigator's EDU with the final value
            investigator.characteristics.EDU = updatedEDU;
        }, [investigator]);

        return (
            <ThemedView style={styles.modifyContainer}>
                <ThemedText style={{fontWeight: "bold"}}><Text style={{color:  "lightgreen"}}>10</Text> points must be deducted from APP</ThemedText>
                <ThemedText style={{fontWeight: "bold"}}>Making <Text style={{color:  "lightgreen"}}>3</Text> improvement checks for EDU:</ThemedText>
                {eduCheckResults.map((result, index) => (
                    <ThemedText key={index}>
                        Rolled:{" "}
                        <Text style={{ color: "lightgreen" }}>{result.roll}</Text>{" "}
                        - {result.success ? `Success, EDU increased by ${result.improvement}` : "Failed, EDU remains the same"}
                    </ThemedText>
                ))}
                <ThemedText style={{fontWeight: "bold"}}>Deduct <Text style={{color:  "lightgreen"}}>{remainingPoints}</Text> points from STR, CON, and/or DEX:</ThemedText>
                <StatDeductRow stat="STR"/>
                <StatDeductRow stat="CON"/>
                <StatDeductRow stat="DEX"/>
            </ThemedView>
        );
    };
    const age60to69 = () => {
        const [eduCheckResults, setEduCheckResults] = useState<EduRollResult[]>([]);
        useEffect(() => {
            const checks = [];
            let updatedEDU = investigator.characteristics.EDU;
            // Perform two improvement checks
            for (let i = 0; i < 4; i++) {
                const result = eduImprovementCheck(updatedEDU);
                checks.push(result);
                if (result.success) {
                    updatedEDU = result.newEDU; // Update EDU only on success
                }
            }
            setEduCheckResults(checks);
            // Update the investigator's EDU with the final value
            investigator.characteristics.EDU = updatedEDU;
        }, [investigator]);

        return (
            <ThemedView style={styles.modifyContainer}>
                <ThemedText style={{fontWeight: "bold"}}><Text style={{color:  "lightgreen"}}>15</Text>points must be deducted from APP</ThemedText>
                <ThemedText style={{fontWeight: "bold"}}>Making <Text style={{color:  "lightgreen"}}>4</Text> improvement checks for EDU:</ThemedText>
                {eduCheckResults.map((result, index) => (
                    <ThemedText key={index}>
                        Rolled:{" "}
                        <Text style={{ color: "lightgreen" }}>{result.roll}</Text>{" "}
                        - {result.success ? `Success, EDU increased by ${result.improvement}` : "Failed, EDU remains the same"}
                    </ThemedText>
                ))}
                <ThemedText style={{fontWeight: "bold"}}>Deduct <Text style={{color:  "lightgreen"}}>{remainingPoints}</Text> points from STR, CON, and/or DEX:</ThemedText>
                <StatDeductRow stat="STR"/>
                <StatDeductRow stat="CON"/>
                <StatDeductRow stat="DEX"/>
            </ThemedView>
        );
    };
    const age70to79 = () => {
        const [eduCheckResults, setEduCheckResults] = useState<EduRollResult[]>([]);
        useEffect(() => {
            const checks = [];
            let updatedEDU = investigator.characteristics.EDU;
            // Perform two improvement checks
            for (let i = 0; i < 4; i++) {
                const result = eduImprovementCheck(updatedEDU);
                checks.push(result);
                if (result.success) {
                    updatedEDU = result.newEDU; // Update EDU only on success
                }
            }
            setEduCheckResults(checks);
            // Update the investigator's EDU with the final value
            investigator.characteristics.EDU = updatedEDU;
        }, [investigator]);

        return (
            <ThemedView style={styles.modifyContainer}>
                <ThemedText style={{fontWeight: "bold"}}><Text style={{color:  "lightgreen"}}>20</Text> points must be deducted from APP</ThemedText>
                <ThemedText style={{fontWeight: "bold"}}>Making <Text style={{color:  "lightgreen"}}>4</Text> improvement checks for EDU:</ThemedText>
                {eduCheckResults.map((result, index) => (
                    <ThemedText key={index}>
                        Rolled:{" "}
                        <Text style={{ color: "lightgreen" }}>{result.roll}</Text>{" "}
                        - {result.success ? `Success, EDU increased by ${result.improvement}` : "Failed, EDU remains the same"}
                    </ThemedText>
                ))}
                <ThemedText style={{fontWeight: "bold"}}>Deduct <Text style={{color:  "lightgreen"}}>{remainingPoints}</Text> points from STR, CON, and/or DEX:</ThemedText>
                <StatDeductRow stat="STR"/>
                <StatDeductRow stat="CON"/>
                <StatDeductRow stat="DEX"/>
            </ThemedView>
        );
    };
    const age80to89 = () => {
        const [eduCheckResults, setEduCheckResults] = useState<EduRollResult[]>([]);
        useEffect(() => {
            const checks = [];
            let updatedEDU = investigator.characteristics.EDU;
            // Perform two improvement checks
            for (let i = 0; i < 4; i++) {
                const result = eduImprovementCheck(updatedEDU);
                checks.push(result);
                if (result.success) {
                    updatedEDU = result.newEDU; // Update EDU only on success
                }
            }
            setEduCheckResults(checks);
            // Update the investigator's EDU with the final value
            investigator.characteristics.EDU = updatedEDU;
        }, [investigator]);

        return (
            <ThemedView style={styles.modifyContainer}>
                <ThemedText style={{fontWeight: "bold"}}>25 points must be deducted from APP</ThemedText>
                <ThemedText style={{fontWeight: "bold"}}>Making <Text style={{color:  "lightgreen"}}>4</Text> improvement checks for EDU:</ThemedText>
                {eduCheckResults.map((result, index) => (
                    <ThemedText key={index}>
                        Rolled:{" "}
                        <Text style={{ color: "lightgreen" }}>{result.roll}</Text>{" "}
                        - {result.success ? `Success, EDU increased by ${result.improvement}` : "Failed, EDU remains the same"}
                    </ThemedText>
                ))}
                <ThemedText style={{fontWeight: "bold"}}>Deduct <Text style={{color: "lightgreen"}}>{remainingPoints}</Text> points from STR, CON, and/or DEX:</ThemedText>
                <StatDeductRow stat="STR"/>
                <StatDeductRow stat="CON"/>
                <StatDeductRow stat="DEX"/>
            </ThemedView>
        );
    };

    const saveModifiers = () => {

    };

    return (
        <ThemedSafeAreaView style={styles.safeView}>
            <ThemedText style={styles.headerText}>Modifiers Component</ThemedText>
            <ThemedText style={{textAlign: "center", marginTop: 20}}>Your investigator's stats will undergo modifications based on their age</ThemedText>
            <ThemedText style={{textAlign: "center", marginTop: 20}}>Investigator's Age: <Text style={{color: "lightgreen"}}>{age}</Text></ThemedText>
            <ThemedText style={{textAlign: "center", marginTop: 20}}>Because of your investigator's age, the following modifications must be applied:</ThemedText>
            {age !== undefined && (
                age <= 19 ? age15to19() : 
                age <= 39 ? age20to39() :
                age <= 49 ? age40to49() :
                age <= 59 ? age50to59() :
                age <= 69 ? age60to69() :
                age <= 79 ? age70to79() : age80to89()
            )}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width:200, marginTop: 20}}>
                <TouchableOpacity style={styles.navButton} onPress={() => {router.back()}}>
                    <ThemedText>Back</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.navButton, {opacity: remainingPoints !== 0 ? 0.5 : 1}]} 
                    onPress={() => {}}
                    disabled={remainingPoints !== 0}
                >
                    <ThemedText>Next</ThemedText>
                </TouchableOpacity>
            </View>
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
        width: 400,
        height: 400,
        marginTop: 20,
        justifyContent: "space-evenly",
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    navButton: {
        borderRadius: 5,
        backgroundColor: "#00cc66",
        padding: 10,
    }
});
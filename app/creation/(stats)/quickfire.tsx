import React, { useState } from "react";
import { Dimensions, FlatList, StyleSheet, TouchableOpacity, View, Text, useColorScheme } from "react-native";
import ThemedSafeAreaView from "@/components/ui/ThemedSafeAreaView";
import ThemedText from "@/components/ui/ThemedText";
import DraggableFlatList, {
    RenderItemParams,
    ScaleDecorator,
} from "react-native-draggable-flatlist";
import ThemedView from "@/components/ui/ThemedView";
import { router } from "expo-router";
import useInvestigator from "@/hooks/useInvestigator";

type StatItem = {
    text: string;
    key: string;
};

const initialValues: StatItem[] = [
    { text: "40", key: "1" },
    { text: "50", key: "2" },
    { text: "50", key: "3" },
    { text: "50", key: "4" },
    { text: "60", key: "5" },
    { text: "60", key: "6" },
    { text: "70", key: "7" },
    { text: "80", key: "8" }
];

const screenWidth = Dimensions.get("window").width;
const elementWidth = screenWidth * 0.15; 

export default function QuickFireStats() {
    const investigator = useInvestigator();
    const [data, setData] = useState(initialValues);

    const saveStats = () => {
        if (investigator) {
            investigator.characteristics.STR = parseInt(data[0].text);
            investigator.characteristics.CON = parseInt(data[1].text);
            investigator.characteristics.SIZ = parseInt(data[2].text);
            investigator.characteristics.DEX = parseInt(data[3].text);
            investigator.characteristics.APP = parseInt(data[4].text);
            investigator.characteristics.INT = parseInt(data[5].text);
            investigator.characteristics.POW = parseInt(data[6].text);
            investigator.characteristics.EDU = parseInt(data[7].text);
            router.navigate("/creation/occupation");
        }
    }

    const renderItem = ({ item, drag, isActive }: RenderItemParams<StatItem>) => (
        <ScaleDecorator>
            <TouchableOpacity
                activeOpacity={0.5}
                onLongPress={drag}
                disabled={isActive}
                style={[
                    styles.statValueList,
                    { 
                        width: elementWidth, // Set the width dynamically
                        backgroundColor: isActive ? "red" : "#00cc66",
                    },
                ]}
            >
                <ThemedText style={styles.statValueText}>{item.text}</ThemedText>
            </TouchableOpacity>
        </ScaleDecorator>
    );

    return (
        <ThemedSafeAreaView style={styles.safeView}>
            <View style={styles.headerContainer}>
                <ThemedText style={styles.headerText}>Quick Fire Component</ThemedText>
                <ThemedText style={{marginVertical: 10, textAlign: "center", fontSize: 14}}>
                    <Text style={{color: "red"}}>(</Text>
                    Long press and drag the stat values around
                    <Text style={{color: "red"}}>)</Text>
                </ThemedText>
            </View>
            <View style={styles.statSelectContainer}>
                {/* Left-side static list */}
                <FlatList
                    data={["STR", "CON", "SIZ", "DEX", "APP", "INT", "POW", "EDU"]}
                    renderItem={({ item }) => (
                        <ThemedView style={styles.statLabelList}>
                            <ThemedText style={styles.statLabelText}>{item}</ThemedText>
                        </ThemedView>
                    )}
                    keyExtractor={(item) => item}
                    scrollEnabled={false}
                />
                {/* Right-side draggable list */}
                <DraggableFlatList
                    data={data}
                    onDragEnd={({ data }) => setData(data)}
                    keyExtractor={(item) => item.key}
                    renderItem={renderItem}
                />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width:200}}>
                <TouchableOpacity style={styles.button} onPress={() => {router.back()}}>
                    <ThemedText>Back</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {saveStats();}}>
                    <ThemedText>Next</ThemedText>
                </TouchableOpacity>
            </View>
        </ThemedSafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeView: {
        justifyContent: "flex-start",
        alignItems: "center",
    },
    headerContainer: {
        width: "100%",
        padding: 10,
    },
    headerText: {
        fontSize: 19,
        fontWeight: "bold",
        textAlign: "center",
    },
    statSelectContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    statLabelList: {
        padding: 20,
        marginBottom: 20,
        marginHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
    },
    statLabelText: {
        textAlign: "center",
        fontWeight: "bold",
    },
    statValueList: {
        padding: 20,
        marginBottom: 20,
        marginHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    statValueText: {
        textAlign: "center",
        fontWeight: "bold",
    },
    button: {
        borderRadius: 5,
        backgroundColor: "#00cc66",
        padding: 10,
    }
});

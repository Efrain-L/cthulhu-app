import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useEffect, useState } from "react";

import ThemedText from "@/app/components/ui/ThemedText";
import InvestigatorList from "@/app/components/InvestigatorList";
import { loadAllInvestigators } from "@/utils/investigatorStorage";
import { Investigator } from "@/types/Investigator";
import CreateInvestigatorModal from "./CreateInvestigatorModal";

type InvestigatorItem = {
  id: string;
  investigator: Investigator;
};

export default function Index() {
  const [investigators, setInvestigators] = useState<InvestigatorItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const colorScheme = useColorScheme();
  const containerThemeStyle = colorScheme === 'dark' ? styles.darkThemeContainer : styles.lightThemeContainer;

  // all functions inside this will run on the first render
  useEffect(() => {
    const fetchInvestigators = async () => {
        const loadedInvestigators = await loadAllInvestigators();
        const investigatorItems = loadedInvestigators.map((investigator, index) => ({ id: `${index}`, investigator }));
        setInvestigators(investigatorItems);
        setIsLoading(false);
    };
    fetchInvestigators();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.container, containerThemeStyle]}>
        <ThemedText>Loading...</ThemedText>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, containerThemeStyle]}>
      <ThemedText style={{marginTop: 20}}>Welcome to the Cthulhu Character Creator App!</ThemedText>
      <InvestigatorList investigators={investigators} />      
      <TouchableOpacity style={[styles.newCharButton]} onPress={() => setModalVisible(true)}>
        <ThemedText>Create New Investigator</ThemedText>
      </TouchableOpacity>
      <CreateInvestigatorModal visible={modalVisible} onClose={() => setModalVisible(false)} />
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
  newCharButton: {
    backgroundColor: "#00cc66",
    padding: 10,
    margin: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
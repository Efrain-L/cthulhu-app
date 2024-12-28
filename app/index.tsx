import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";

import ThemedText from "@/components/ui/ThemedText";
import InvestigatorList from "@/components/InvestigatorList";
import { loadAllInvestigators } from "@/utils/investigatorStorage";
import { Investigator } from "@/types/Investigator";
import CreateInvestigatorModal from "./creation/CreateInvestigatorModal";
import ThemedSafeAreaView from "@/components/ui/ThemedSafeAreaView";

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
    <ThemedSafeAreaView style={[styles.container, containerThemeStyle]}>
      <ThemedText style={{marginTop: 20, fontSize: 27, textAlign: "center"}}>Welcome to the Cthulhu Character Creator App!</ThemedText>
      <InvestigatorList investigators={investigators} />      
      <TouchableOpacity style={[styles.newCharButton]} onPress={() => setModalVisible(true)}>
        <ThemedText style={{fontWeight: 'bold'}}>Create New Investigator</ThemedText>
      </TouchableOpacity>
      <CreateInvestigatorModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightThemeContainer: {
    backgroundColor: "#dee4e7",
  },
  darkThemeContainer: {
    backgroundColor: "#242c40",
  },
  newCharButton: {
    alignSelf: "center",
    position: 'absolute',
    bottom: 10,
    backgroundColor: "#00cc66",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

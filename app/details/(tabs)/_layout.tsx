import { useLocalSearchParams } from "expo-router";
import { Tabs } from "expo-router/tabs";
import InvestigatorProvider from "../contexts/InvestigatorContext";

export default function DetailsTabLayout() {
  // local params
  const { investigatorJSON } = useLocalSearchParams();
  
  const investigator = investigatorJSON ? JSON.parse(investigatorJSON as string) : null;

  return (
    <InvestigatorProvider investigator={investigator}>
      <Tabs screenOptions={{ headerShown: false, animation: 'shift' }}>
            <Tabs.Screen name="index" options={{ title: 'Bio' }}/>
            <Tabs.Screen name="stats" options={{ title: 'Stats' }}/>
      </Tabs>
    </InvestigatorProvider>
  );
}

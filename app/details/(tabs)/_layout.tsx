import { useLocalSearchParams } from "expo-router";
import { Tabs } from "expo-router";
import InvestigatorProvider from "@/contexts/InvestigatorContext";

export default function DetailsTabLayout() {
  // local params
  const { investigatorJSON } = useLocalSearchParams();
  
  const investigator = investigatorJSON ? JSON.parse(investigatorJSON as string) : null;

  return (
    <InvestigatorProvider investigator={investigator}>
      <Tabs 
        screenOptions={{
          headerShown: false, 
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopWidth: 0,
            height: 60,
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      >
        <Tabs.Screen name="index" options={{ title: 'Bio' }}/>
        <Tabs.Screen name="stats" options={{ title: 'Stats' }}/>
      </Tabs>
    </InvestigatorProvider>
  );
}

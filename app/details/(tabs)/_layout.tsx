import { useLocalSearchParams } from "expo-router";
import { Tabs } from "expo-router";
import InvestigatorProvider from "@/contexts/InvestigatorContext";
import { StyleSheet, useColorScheme } from "react-native";

export default function DetailsTabLayout() {
  const colorScheme = useColorScheme();
  const tabThemeStyle = colorScheme === 'dark' ? styles.darkThemeTabs : styles.lightThemeTabs;
  const tint = colorScheme === 'dark' ? darkTint : lightTint;

  const { investigatorJSON } = useLocalSearchParams();
  const investigator = investigatorJSON ? JSON.parse(investigatorJSON as string) : null;

  return (
    <InvestigatorProvider investigator={investigator}>
      <Tabs 
        screenOptions={{
          headerShown: false, 
          tabBarStyle: tabThemeStyle,
          tabBarActiveTintColor: tint.active,
          tabBarInactiveTintColor: tint.inactive,
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      >
        <Tabs.Screen name="bio" options={{ title: 'Bio' }}/>
        <Tabs.Screen name="skills" options={{ title: 'Skills' }}/>
      </Tabs>
    </InvestigatorProvider>
  );
}

const styles = StyleSheet.create({
  lightThemeTabs: {
    height: 60,
    borderTopWidth: 0,
    backgroundColor: "white",
  },
  darkThemeTabs: {
    height: 60,
    borderTopWidth: 0,
    backgroundColor: "black",
  },
});

const lightTint = {
  active: "black",
  inactive: "gray",
}

const darkTint = {
  active: "white",
  inactive: "gray",
}
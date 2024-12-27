import { Stack } from "expo-router/stack";
import { Tabs } from "expo-router/tabs";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

export default function DetailsTabLayout() {

    return (
      <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="index" options={{ title: 'Bio' }}/>
            <Tabs.Screen name="stats" options={{ title: 'Stats' }}/>
      </Tabs>
    );
}

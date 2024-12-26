import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="create-investigator" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" backgroundColor={colorScheme === 'dark' ? '#1a2236' : '#bec8d2'} />
    </ThemeProvider>
  );
}

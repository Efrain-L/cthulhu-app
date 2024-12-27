import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router/stack";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" backgroundColor={colorScheme === 'dark' ? '#1a2236' : '#bec8d2'} />
      <Stack screenOptions={{ headerShown: false  }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="details" options={{presentation: 'containedTransparentModal', animation: 'slide_from_left'}}/>
      </Stack>
    </ThemeProvider>
  );
}

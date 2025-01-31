import { Stack } from "expo-router/stack";
import { StatusBar } from "react-native";
import { useColorScheme } from "react-native";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={colorScheme === 'dark' ? '#1a2236' : '#bec8d2'} />
        <Stack screenOptions={{ headerShown: false  }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="details" options={{presentation: 'containedTransparentModal', animation: 'slide_from_left'}}/>
          <Stack.Screen name="creation" options={{presentation: 'containedTransparentModal', animation: 'slide_from_bottom'}}/>
        </Stack>
      </View>
    </GestureHandlerRootView>
  );
}
import { Stack } from "expo-router/stack";

export default function DetailsLayout() {

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="details" />
        </Stack>
    );
}

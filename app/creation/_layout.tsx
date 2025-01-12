import { InvestigatorContext } from "@/contexts/InvestigatorContext";
import { Investigator } from "@/types/Investigator";
import { getBlankInvestigator } from "@/utils/blankInvestigator";
import { Stack } from "expo-router/stack";
import { useRef } from "react";

export default function DetailsLayout() {
    const newInvestigator: Investigator = useRef(getBlankInvestigator()).current;

    return (
        <InvestigatorContext.Provider value={newInvestigator}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="details" />
            </Stack>
        </InvestigatorContext.Provider>
    );
}

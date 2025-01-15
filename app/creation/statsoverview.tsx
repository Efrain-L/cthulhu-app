import NavButtons from '@/components/NavButtons';
import ThemedSafeAreaView from '@/components/ui/ThemedSafeAreaView';
import ThemedText from '@/components/ui/ThemedText';
import useInvestigator from '@/hooks/useInvestigator';
import generateAttributes from '@/utils/generateAttributes';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function StatsOverview() {
    const investigator = useInvestigator();
    if (!investigator) { return <ThemedSafeAreaView style={styles.safeView}><ThemedText>Investigator data not found</ThemedText></ThemedSafeAreaView>; }

    // generate the attributes for the investigator
    generateAttributes(investigator);

    return (
        <ThemedSafeAreaView style={styles.safeView}>
            <ThemedText style={styles.headerText}>Stats Overview</ThemedText>
            <ThemedText style={{textAlign: "center"}}>Here is a comprehensive list of your new investigator's generated stats:</ThemedText>
            <View style={styles.charactersticContainer}>
                <ThemedText>STR: {investigator.characteristics.STR}</ThemedText>
                <ThemedText>CON: {investigator.characteristics.CON}</ThemedText>
                <ThemedText>SIZ: {investigator.characteristics.SIZ}</ThemedText>
                <ThemedText>DEX: {investigator.characteristics.DEX}</ThemedText>
                <ThemedText>APP: {investigator.characteristics.APP}</ThemedText>
                <ThemedText>INT: {investigator.characteristics.INT}</ThemedText>
                <ThemedText>POW: {investigator.characteristics.POW}</ThemedText>
                <ThemedText>EDU: {investigator.characteristics.EDU}</ThemedText>
            </View>
            <View style={styles.attributeContainer}>
                <ThemedText>Hit Points: {investigator.attributes.hitPoints} / {investigator.attributes.maxHitPoints}</ThemedText>
                <ThemedText>Magic Points: {investigator.attributes.magicPoints} / {investigator.attributes.maxMagicPoints}</ThemedText>
                <ThemedText>Luck: {investigator.attributes.luck} / {investigator.attributes.startingLuck}</ThemedText>
                <ThemedText>Sanity: {investigator.attributes.sanity} / {investigator.attributes.maxSanity}</ThemedText>
                <ThemedText>Move: {investigator.attributes.move}</ThemedText>
                <ThemedText>Build: {investigator.attributes.build}</ThemedText>
                <ThemedText>Damage Bonus: {investigator.attributes.damageBonus}</ThemedText>
            </View>
            <NavButtons disableNext={false} onPressBack={() => router.back()} onPressNext={() => {}} />
        </ThemedSafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeView: {
        alignItems: 'center',
        padding: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    charactersticContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
    },
    attributeContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
    },
});
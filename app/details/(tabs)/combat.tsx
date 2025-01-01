import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

import useInvestigator from '@/hooks/useInvestigator';
import ThemedText from '@/components/ui/ThemedText';
import ThemedView from '@/components/ui/ThemedView';
import ThemedSafeAreaView from '@/components/ui/ThemedSafeAreaView';

const InvestigatorCombat = () => {
    const investigator = useInvestigator();

    if (!investigator) {
        return (
            <ThemedSafeAreaView style={styles.container}>
                <ThemedText style={styles.heading}>Investigator data could not be read.</ThemedText>
            </ThemedSafeAreaView>
        );
    }

    const combat = investigator.combat;
    const attributes = investigator.attributes;

    return (
        <ThemedSafeAreaView style={styles.container}>
            <ThemedText style={styles.heading}>Combat</ThemedText>
            <ThemedText style={styles.sectionHeading}>Combat Stats</ThemedText>
            <View>
                <ThemedText>Move: {attributes.move}</ThemedText>
                <ThemedText>Build: {attributes.build}</ThemedText>
                <ThemedText>Damage Bonus: {attributes.damageBonus}</ThemedText>
            </View>
            <ThemedText style={styles.sectionHeading}>Weapons</ThemedText>
            <Animated.FlatList
                contentContainerStyle={styles.scrollList}
                data={combat}
                keyExtractor={(item) => item.weapon}
                renderItem={({ item }) => <CombatListItem item={item} />}
            />
        </ThemedSafeAreaView>
    );
};

type CombatListItemProps = {
    item: {
        weapon: string;
        skill: number;
        damage: string;
        numAttacks: number;
        range?: number;
        ammo?: number;
        malfunction?: number;
    };
};

const CombatListItem = ({ item }: CombatListItemProps) => (
    <View style={styles.itemContainer}>
        <View style={styles.attributeContainer}>
            <ThemedText style={styles.attributeName}>Weapon</ThemedText>
            <ThemedText style={styles.attributeValue}>{item.weapon}</ThemedText>
        </View>
        <View style={styles.attributeContainer}>
            <ThemedText style={styles.attributeName}>Damage</ThemedText>
            <ThemedText style={styles.attributeValue}>{item.damage}</ThemedText>
        </View>
        <View style={styles.attributeContainer}>
            <ThemedText style={styles.attributeName}>Range</ThemedText>
            <ThemedText style={styles.attributeValue}>{item.range}</ThemedText>
        </View>
        <View style={styles.attributeContainer}>
            <ThemedText style={styles.attributeName}>Attacks</ThemedText>
            <ThemedText style={styles.attributeValue}>{item.numAttacks}</ThemedText>
        </View>
        <View style={styles.attributeContainer}>
            <ThemedText style={styles.attributeName}>Skill</ThemedText>
            <ThemedText style={styles.attributeValue}>{item.skill}</ThemedText>
        </View>
        <View style={styles.attributeContainer}>
            <ThemedText style={styles.attributeName}>Ammo</ThemedText>
            <ThemedText style={styles.attributeValue}>{item.ammo}</ThemedText>
        </View>
        <View style={styles.attributeContainer}>
            <ThemedText style={styles.attributeName}>Malfunction</ThemedText>
            <ThemedText style={styles.attributeValue}>{item.malfunction}</ThemedText>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
    },
    sectionHeading: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    scrollList: {

    },
    itemContainer: {
        marginVertical: 10,
    },
    attributeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    attributeName: {
        fontWeight: 'bold',
    },
    attributeValue: {
        marginLeft: 10,
    },
});

export default InvestigatorCombat;
import ThemedSafeAreaView from '@/components/ui/ThemedSafeAreaView';
import ThemedText from '@/components/ui/ThemedText';
import { StyleSheet, Animated, View, TouchableOpacity, Modal } from 'react-native';
import { occupationList } from '@/utils/occupationList';
import { useState } from 'react';
import NavButtons from '@/components/NavButtons';
import useInvestigator from '@/hooks/useInvestigator';
import { router } from 'expo-router';

export default function OccupationSelection() {
    const investigator = useInvestigator();
    const [modalVisible, setModalVisible] = useState(false);
    const [occupation, setOccupation] = useState('');

    const renderItem = ({ item }: { item: string }) => {
        const onPress = () => {
            setOccupation(item);
            setModalVisible(true);
        };
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
                <ThemedText>{item}</ThemedText>
            </TouchableOpacity>
        );
    };

    const chooseOcc = (occupation: string) => {
        if (investigator) {
            investigator.details.occupation = occupation;
            setModalVisible(false);
            router.navigate('/creation/skillselect');
        }
    }

    return (
        <ThemedSafeAreaView style={styles.safeView}>
            <ThemedText style={styles.headerText}>Select an Occupation</ThemedText>
            <Animated.FlatList
                style={{ paddingTop: 10 }}
                data={occupationList}
                keyExtractor={(item) => item}
                renderItem={renderItem}
                scrollEnabled={true}
            />
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <ThemedText>Choose {occupation}?</ThemedText>
                        <NavButtons onPressBack={() => setModalVisible(false)} onPressNext={() => chooseOcc(occupation)} />
                    </View>
                </View>
            </Modal>
        </ThemedSafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    modalContent: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        alignItems: 'center',
    },
});
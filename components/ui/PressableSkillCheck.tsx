import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, StyleSheet, ViewProps } from 'react-native';
import ThemedText from './ThemedText';

interface PressableSkillCheckProps extends ViewProps {
    skillName: string;
    skillValue: number;
}

export default function PressableSkillCheck({ style, children, skillName, skillValue }: PressableSkillCheckProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const [randomNumber, setRandomNumber] = useState<number | null>(null);
    const [result, setResult] = useState<string | null>(null);

    const rollDice = () => {
        const number = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(number);

        if (number == 1) {
            setResult('Critical Success');
        } 
        else if (number <= skillValue / 4) {
            setResult('Extreme Success');
        } 
        else if (number <= skillValue / 2) {
            setResult('Hard Success');
        } 
        else if (number <= skillValue) {
            setResult('Regular Success');
        }
        else if (number == 100) {
            setResult('Fumble');
        }
        else {
            setResult('Failed');
        }

        setModalVisible(true);
    };

    const closeModal = () => setModalVisible(false);

    return (
        <View>
            <TouchableOpacity style={[style]} onPress={rollDice}>
                {children}
            </TouchableOpacity>
            <Modal
                animationType='fade'
                transparent
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ThemedText style={styles.modalText}>{skillName} Skill Check</ThemedText>
                        <ThemedText style={styles.modalText}>Rolled: {randomNumber}</ThemedText>
                        <ThemedText style={styles.modalText}>{result}</ThemedText>
                        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                            <ThemedText>Close</ThemedText>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: 250, // Fixed width
        height: 250, // Fixed height
        backgroundColor: '#00cc66',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderColor: 'black',
    },
    modalText: {
        marginBottom: 15,
    },
    closeButton: {
        backgroundColor: 'lightgreen',
        borderRadius: 10,
        padding: 10,
    },
});

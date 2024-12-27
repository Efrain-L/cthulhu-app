import { Modal, StyleSheet, TouchableOpacity } from 'react-native';
import ThemedText from "@/components/ui/ThemedText";
import ThemedView from '@/components/ui/ThemedView';
import ThemedTextInput from '@/components/ui/ThemedTextInput';

type CreateInvestigatorModalProps = {
    visible: boolean;
    onClose: () => void;
};

export default function CreateInvestigatorModal({ visible, onClose }: CreateInvestigatorModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
        <ThemedView style={styles.modalView}>
            <ThemedText style={{margin: 20}}>Creating a new Investigator</ThemedText>
            <ThemedTextInput style={styles.input} placeholder="Character Name"/>
            <ThemedTextInput style={styles.input} placeholder="Character Description" />
            <ThemedTextInput style={styles.input} placeholder="Character Age" />
            <ThemedTextInput style={styles.input} placeholder="Character Occupation" />
            <ThemedTextInput style={styles.input} placeholder="Character Location" />
            <TouchableOpacity onPress={onClose}>
                <ThemedText>Close</ThemedText>
            </TouchableOpacity>
        </ThemedView>
    </Modal>
  );
};

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 20,
        padding: 35,
    },
    input: {
        height: 40,
        width: 300,
        margin: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    }
});
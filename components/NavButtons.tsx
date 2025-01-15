import { TouchableOpacity, View, StyleSheet } from "react-native";
import ThemedText from "./ui/ThemedText";


type NavButtonsProps = {
    disableNext?: boolean;
    onPressBack: () => void;
    onPressNext: () => void;
};

export default function NavButtons({ disableNext=false, onPressBack, onPressNext }: NavButtonsProps) {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width:200, marginTop: 20}}>
                <TouchableOpacity style={styles.navButton} onPress={onPressBack}>
                    <ThemedText>Back</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.navButton, {opacity: disableNext ? 0.5 : 1}]} 
                    onPress={onPressNext}
                    disabled={disableNext}
                >
                    <ThemedText>Next</ThemedText>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navButton: {
        borderRadius: 5,
        backgroundColor: "#00cc66",
        padding: 10,
    }
});
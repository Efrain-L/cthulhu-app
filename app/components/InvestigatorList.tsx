import { StyleSheet, TouchableOpacity} from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import { Image } from "expo-image";

import ThemedText from "./ThemedText";
import { Investigator } from "@/types/Investigator";

type InvestigatorItem = {
    id: string;
    investigator: Investigator;
};

export default function InvestigatorList(props: {investigators:  InvestigatorItem[]}) {
    return (
        <Animated.FlatList
            data={props.investigators} 
            renderItem={renderItem} 
            keyExtractor={(item) => item.id}
            itemLayoutAnimation={LinearTransition}
        />
    )
}

const renderItem = ({item}: {item: InvestigatorItem}) => {
    const name = item.investigator.details.name;
    const occupation = item.investigator.details.occupation;
    const imagePath = item.investigator.details.imagePath;
    return (
        <TouchableOpacity style={styles.item}>
            <ThemedText>{name}</ThemedText>
            <ThemedText>{occupation}</ThemedText>
            <Image source={{ uri: imagePath }} style={styles.image} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
      backgroundColor: "#00cc66",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
    }
});
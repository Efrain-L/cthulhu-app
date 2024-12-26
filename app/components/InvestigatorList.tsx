import { StyleSheet, TouchableOpacity, Image} from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";

import { Investigator } from "@/types/Investigator";
import ThemedText from "./ui/ThemedText";
import ThemedView from "./ui/ThemedView";

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
            style={styles.list}
        />
    )
}

const renderItem = ({item}: {item: InvestigatorItem}) => {
    const name = item.investigator.details.name;
    const occupation = item.investigator.details.occupation;
    const imagePath: any = item.investigator.details.imagePath;
    
    return (
        <TouchableOpacity style={styles.item}>
            {/* There may be a compiler error here, but running with expo start still works /> */}
            <ThemedView style={styles.imageContainer}>
                <Image source={imagePath} style={styles.image} />
            </ThemedView>
            <ThemedView style={{flex: 1}}>
                <ThemedText>Name:</ThemedText>
                <ThemedText>{name}</ThemedText>
                <ThemedText></ThemedText>
                <ThemedText>Occupation:</ThemedText>
                <ThemedText>{occupation}</ThemedText>
            </ThemedView>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    list: {
        alignSelf: "flex-start",
        marginLeft: 10,
    },
    item: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 10,
      width: 300,
      height: 150,
    },
    imageContainer: {
        padding: 0, 
        borderWidth: 2,
        borderColor: "#00cc66", 
        borderRadius: 13, 
        margin: 10,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "cover",
        borderRadius: 10,
    },
});
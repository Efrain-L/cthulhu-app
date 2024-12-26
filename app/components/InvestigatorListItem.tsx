import { StyleSheet, TouchableOpacity, Image} from "react-native";

import ThemedText from "./ui/ThemedText";
import ThemedView from "./ui/ThemedView";

type InvestigatorItemProps = {
    name: string;
    occupation: string;
    imagePath: any;
}

export default function InvestigatorListItem({ name, occupation, imagePath }: InvestigatorItemProps) {
    return( 
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
}

const styles = StyleSheet.create({
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
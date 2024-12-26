import { StyleSheet, TouchableOpacity, Image} from "react-native";

import ThemedText from "@/app/components/ui/ThemedText";
import ThemedView from "@/app/components/ui/ThemedView";

type InvestigatorItemProps = {
    name: string;
    occupation: string;
    imagePath: any;
}

export default function InvestigatorListItem({ name, occupation, imagePath }: InvestigatorItemProps) {
    return( 
      <TouchableOpacity style={styles.item}>
        <ThemedView style={styles.imageContainer}>
            {/* There may be a compiler error here, but running with expo start still works /> */}
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
    width: 300,
    height: 150,
  },
  imageContainer: {
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
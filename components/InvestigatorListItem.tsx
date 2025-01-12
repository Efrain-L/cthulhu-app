import { StyleSheet, TouchableOpacity, Image, View} from "react-native";

import ThemedText from "@/components/ui/ThemedText";
import ThemedView from "@/components/ui/ThemedView";

type InvestigatorItemProps = {
    name: string;
    occupation: string;
    imagePath: any;
    onPress: () => void;
}

export default function InvestigatorListItem({ name, occupation, imagePath, onPress}: InvestigatorItemProps) {
    return( 
      <TouchableOpacity style={styles.item} onPress={onPress}>
        <View style={styles.imageContainer}>
            {/* There may be a compiler error here, but running with expo start still works /> */}
            <Image source={imagePath} style={styles.image} />
        </View>
        <ThemedView style={{flex: 1}}>
            <ThemedText style={{fontWeight: 'bold'}}>Investigator's Name:</ThemedText>
            <ThemedText>{name}</ThemedText>
            <ThemedText></ThemedText>
            <ThemedText style={{fontWeight: 'bold'}}>Investigator's Occupation:</ThemedText>
            <ThemedText>{occupation}</ThemedText>
        </ThemedView>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    width: 400,
    height: 130,
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: "#00cc66", 
    borderRadius: 13, 
    marginLeft: 10,
    marginRight: 12,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
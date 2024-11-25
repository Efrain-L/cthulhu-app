import { StyleSheet, Text, TouchableOpacity } from "react-native";

type CharacterItemProps = {
    title: string;
}

export default function CharacterItem({ title }: CharacterItemProps) {
    return( 
        <TouchableOpacity style={styles.item}>
          <Text>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: "lightgreen",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
    },
  });
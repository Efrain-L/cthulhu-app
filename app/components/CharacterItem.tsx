import { StyleSheet, Text, TouchableOpacity } from "react-native";

type CharacterItemProps = {
    title: string,
    textStyle: object,
}

export default function CharacterItem({ title, textStyle }: CharacterItemProps) {
    return( 
        <TouchableOpacity style={styles.item}>
          <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    );
}

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
  });
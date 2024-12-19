import { StyleSheet, Text, TouchableOpacity, useColorScheme } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import CharacterItem from "./components/CharacterItem";
import { router } from "expo-router";

type ItemData = {
  id: string;
  name: string;
}

const data: ItemData[] = [
  { 
    id: "1",
    name: "Cthulhu" 
  },
  { 
    id: "2",
    name: "Azathoth" 
  },
  {
    id: "3",
    name: "Nyarlathotep" 
  },
]

export default function Index() {
  const colorScheme = useColorScheme();
  const containerThemeStyle = colorScheme === 'dark' ? styles.darkThemeContainer : styles.lightThemeContainer;
  const textThemeStyle = colorScheme === 'dark' ? styles.darkThemeText : styles.lightThemeText;

  const renderItem = ({item}: {item: ItemData}) => {
    return (
      <CharacterItem title={item.name} textStyle={styles.buttonTextColor} />
    );
  };

  return (
    <SafeAreaView style={[styles.container, containerThemeStyle]}>
      <Text style={[textThemeStyle, {margin: 20}]}>Welcome to the Cthulhu Character Creator App!</Text>
      <Animated.FlatList
        data={data} 
        renderItem={renderItem} 
        keyExtractor={(item) => item.id}
        itemLayoutAnimation={LinearTransition}
      />
      <TouchableOpacity style={[styles.newCharButton]} onPress={() => router.push("/create-character")}>
        <Text style={styles.buttonTextColor}>Create New Character</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lightThemeContainer: {
    backgroundColor: "#dee4e7",
  },
  darkThemeContainer: {
    backgroundColor: "#242c40",
  },
  lightThemeText: {
    color: "black",
  },
  darkThemeText: {
    color: "white",
  },
  newCharButton: {
    backgroundColor: "#00cc66",
    padding: 10,
    margin: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  }, 
  buttonTextColor: {
    color: "white",
  }
});
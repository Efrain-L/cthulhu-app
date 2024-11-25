import { StyleSheet, Text, TouchableOpacity, useColorScheme } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import CharacterItem from "./components/CharacterItem";

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

const renderItem = ({item}: {item: ItemData}) => {
  return (
    <CharacterItem title={item.name}/>
  );
};

export default function Index() {
  const colorScheme = useColorScheme();
  const containerThemeStyle = colorScheme === 'dark' ? styles.darkThemeContainer : styles.lightThemeContainer;
  const textThemeStyle = colorScheme === 'dark' ? styles.darkThemeText : styles.lightThemeText;

  return (
    <SafeAreaView style={[styles.container, containerThemeStyle]}>
      <Text style={[textThemeStyle, {margin: 20}]}>Welcome to the Cthulhu Character Creator App!</Text>
      <Animated.FlatList
        data={data} 
        renderItem={renderItem} 
        keyExtractor={(item) => item.id}
        itemLayoutAnimation={LinearTransition}
      />
      <TouchableOpacity style={[styles.newCharButton]} onPress={() => console.log("Button pressed!")}>
        <Text>Create New Character</Text>
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
  list: {
    flex: 1,
    justifyContent: "center",
  },
  newCharButton: {
    backgroundColor: "lightgreen",
    padding: 10,
    margin: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  }, 
  lightThemeContainer: {
    backgroundColor: "#d0d0c0",
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
});
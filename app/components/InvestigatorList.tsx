import { StyleSheet } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";

import { Investigator } from "@/types/Investigator";
import InvestigatorListItem from "@/app/components/InvestigatorListItem";
import { useRouter } from "expo-router";

type InvestigatorItem = {
    id: string;
    investigator: Investigator;
};

export default function InvestigatorList(props: {investigators:  InvestigatorItem[]}) {
    const router = useRouter();

    const renderItem = ({item}: {item: InvestigatorItem}) => {
        const name = item.investigator.details.name;
        const occupation = item.investigator.details.occupation;
        const imagePath = item.investigator.details.imagePath;
    
        const onPress = () => {
            //console.log(`Investigator ${name} path: ${imagePath}`);
            router.push({ pathname: "/details", params: { investigatorJSON: JSON.stringify(item.investigator) } });
        }
        
        return (
            <InvestigatorListItem name={name} occupation={occupation} imagePath={imagePath} onPress={onPress}/>
        );
    };

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



const styles = StyleSheet.create({
    list: {
        alignSelf: "flex-start",
        marginLeft: 10,
    },
});
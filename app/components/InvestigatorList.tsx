import { StyleSheet } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";

import { Investigator } from "@/types/Investigator";
import InvestigatorListItem from "./InvestigatorListItem";

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
        <InvestigatorListItem name={name} occupation={occupation} imagePath={imagePath} />
    );
};

const styles = StyleSheet.create({
    list: {
        alignSelf: "flex-start",
        marginLeft: 10,
    },
});
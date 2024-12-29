import { StyleSheet } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

import { Investigator } from "@/types/Investigator";
import InvestigatorListItem from "@/components/InvestigatorListItem";
import { useRouter } from "expo-router";

type InvestigatorItem = {
    id: string;
    investigator: Investigator;
};

export default function InvestigatorList(props: { investigators: InvestigatorItem[] }) {
    const router = useRouter();

    const renderItem = ({ item, index }: { item: InvestigatorItem; index: number }) => {
        const name = item.investigator.details.name;
        const occupation = item.investigator.details.occupation;
        const imagePath = item.investigator.details.imagePath;

        const onPress = () => {
            router.push({ pathname: "/details", params: { investigatorJSON: JSON.stringify(item.investigator) } });
        };

        return (
            <Animated.View entering={FadeIn.delay(index * 100)}>
                <InvestigatorListItem name={name} occupation={occupation} imagePath={imagePath} onPress={onPress} />
            </Animated.View>
        );
    };

    return (
        <Animated.FlatList
            data={props.investigators}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.list}
            scrollEnabled={true}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        alignSelf: "flex-start",
        marginLeft: 10,
    },
});

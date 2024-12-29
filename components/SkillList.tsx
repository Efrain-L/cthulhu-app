import { StyleSheet, Animated, View } from 'react-native';
import ThemedView from '@/components/ui/ThemedView';
import ThemedText from '@/components/ui/ThemedText';
import { Investigator } from '@/types/Investigator';
import SkillListItem from '@/components/SkillListItem';

export default function SkillList({ investigator }: { investigator: Investigator }) {
    const skills = Object.entries(investigator.skills);
    
    const renderItem = ({ item: [skillName, skillValue] }: { item: [string, any] }) => (
        <SkillListItem skillName={skillName} skillValue={skillValue} />
    );

    return (
        <ThemedView style={styles.container}>
            <Animated.FlatList
                contentContainerStyle={styles.scrollList}
                data={skills}
                keyExtractor={([key]) => key}
                renderItem={renderItem}
            />
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },
    scrollList: {
        flexGrow: 1,
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
});

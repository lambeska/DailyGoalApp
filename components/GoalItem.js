import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
    return (

        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#790c5a' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View >

    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#cc0e74',
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
});
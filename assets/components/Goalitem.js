import { StyleSheet, View, Text, Pressable } from "react-native";

    function GoalItem({itemData, onDeleteItem, id}){

        function deleteGoalHandler(){
            onDeleteItem(id)
            console.log('Delete Goal handler')
        }

        return (
            <Pressable onPress={deleteGoalHandler}>
                <View style={StyleSheet.goalsItem}>
                    <Text style={StyleSheet.goalsText}>{itemData.item.text}</Text>
                </View>
            </Pressable>
        )
    }

    export default GoalItem

    const styles = StylesSheet.create({
        goalsItem: {
            margin: 8,
            padding: 8,
            borderRadius: 6,
            backgroundColor: '#8576FF',
            color: 'white',
        },
        goalsText: {
            color: 'white',
        }
    })
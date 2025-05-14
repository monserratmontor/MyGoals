import { usestate } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

function GoalInput({onAddGoal}) {

    const [enteredGoalText, setEnteredGoalText] = usestate('')

    function handleInputGoal(enteredGoalText) {
        // console.log(enteresdTex)
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        console.log('addGoalHandler')
    }

    return(
        <view style={StyleSheet.inputContainer}>
            <TextInput
            style={style.TextInput}
            placeholder='Your Goal!'
            onChangeText={handleInputGoal}
            value={enteredGoalText}
            />
            <Button
            title="Add Goal"
            color={'#A3FFD6'}
            onPress={addGoalHandler}
            />
        </view>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottomWidth: 1,
        borderBottomColor:'#7BC9FF'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '80%',
        marginRight: 3,
        paddintg: 8,
        borderRadius: 5
    },
})

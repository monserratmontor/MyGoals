import {useState} from 'react'
import {StyleSheet, View, FlaList} from 'react-native';
import GoalItem from './components/Goalitem';
import GoalInput from './components/GoaiInput';

export default function App(){
  const [goals, setGoals] = useState([])

  function handleAddGoal(enteredGoalText) {
    //console.log('enteredGoalText)
    //console.log('Hello you')
    setGoals(() => [...goals, {text: enteredGoalText, key: Math.random().toString()}])
    console.log('goals:' , goals)
    console.log('handleAddGoal')
  }

  function handleDeleteGoal(id){
    console.log('DELETE')
    const deleteGoal= goals.filter((goal) => {return goal.key !== id})
    setGoals (deleteGoal)
  }

  return(
    <View style= {StyleSheet.container}>
      <GoalInput
      onAddGoal={handleAddGoal} 
      />

      <View style={StyleSheet.goalsContainer}>
        <FlaList
        data={goals}
        renderItem={ (itemData) =>{
          return(
            // <View style={styles.goalsItem}>
            // <Text style={styles.goalText}>{itemData.item.text}</Text>
            // </View>
            <GoalItem 
            itemData={itemData}
            onDeleteItem={handleAddGoal}
            id={itemData.item.key}
            />
          )
        }}
        keyExtractor={(item) =>{
          return item.id
        }}
        />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7BC9FF'
  },
  btnGoal: {
    borderRadius: 20,
    backgroundColor:'#cccccc',
  },

  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 3,
    padding: 8,
    borderRadius: 5
  },
  goalsContainer: {
    flex: 5
  },
});
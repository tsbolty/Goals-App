import React, { useState } from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("")
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  }
  
  const styles = StyleSheet.create({
    input: {
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      width: '80%'
    },
  })
  return (
    <>
      <TextInput
        placeholder="Type here"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal} />
      <Button title="ADD" onPress={props.addGoalHandler.bind(this, enteredGoal)} />
    </>
  )
}

export default GoalInput;
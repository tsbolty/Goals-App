import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, Modal, View } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("")
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  }

  const styles = StyleSheet.create({
    inputContainer: {
      justifyContent: 'center',
      alignItems: "center",
      flex: 1
    },
    input: {
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      width: '80%',
      marginBottom: 15
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '30%'
    },
    button: {
      width: '60%',
      marginRight: 20
    }
  })

const addGoalHandler = ()=>{
  props.addGoalHandler()
  setEnteredGoal("")
}

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type here"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <View style= {styles.buttonContainer}>
          <View style={styles.button}>
        <Button title= "CANCEL" color= "red" onPress= {props.onCancel} />
        </View>
        <View style= {styles.button}>
        <Button title="ADD" onPress={addGoalHandler} />
        </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput;
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const styles = StyleSheet.create({

    row: {
      padding: 50
    }
  });

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals,
    { id: Math.random().toString(), val: goalTitle }
    ])
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(item => item.id !== goalId)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.row}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput 
      visible={isAddMode} 
      addGoalHandler={addGoalHandler} 
      onCancel={cancelGoalAdditionHandler} 
      />
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals} 
      renderItem={itemData => <GoalItem 
      id={itemData.item.id} 
      onDelete={removeGoalHandler} 
      title={itemData.item.val} />} 
      />
    </View>
  );
}

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  
  const styles = StyleSheet.create({
    viewPort: { padding: 50 },
    row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }
  });

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, 
      {id: Math.random().toString(), value: goalTitle}
    ])
  }
  return (
    <View style={styles.viewPort}>
      <View style={styles.row}>
        <GoalInput addGoalHandler= {addGoalHandler} />
      </View>
      <FlatList keyExtractor= {(item, index) => item.id} data={courseGoals} renderItem={itemData => <GoalItem title= {itemData.item.value} />} />
    </View>
  );
}

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const GoalItem = props => {
  

  const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderColor: "black",
      borderWidth: 3
    }
  })

  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  )
}

export default GoalItem;
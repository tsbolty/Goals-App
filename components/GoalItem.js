import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

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
    <TouchableOpacity onPress = {props.onDelete.bind(this, props.id)}>
    <View style={styles.listItem} >
      <Text>{props.title}</Text>
    </View>
    </TouchableOpacity >
  )
}

export default GoalItem;
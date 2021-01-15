import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddGoal, setIsAddGoal] = useState(false);

  const addGoalHandler =(enteredGoal) => {
    // console.log(enteredGoal);
    setCourseGoal([...courseGoal, { id: Math.random().toString(), value: enteredGoal}]);
    setIsAddGoal(false);
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoal((currentGoal) => {
      return currentGoal.filter( currentGoal => currentGoal.id !== goalId)
    })
  }
  return (
    <View style={styles.screen}>
      <Button title="Add Goal" onPress={() => setIsAddGoal(true)}/>
      <GoalInput visible={isAddGoal} onAddGoal={addGoalHandler} onCanceInput={() => setIsAddGoal(false)} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={(itemdata) => <GoalItem id={itemdata.item.id} title={itemdata.item.value} onDelete={removeGoalHandler} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

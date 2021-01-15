import React, { useState }  from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal]= useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }

    const goalHandler =() => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput placeholder="Course Goal"
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <View style={styles.button}>
            <Button
                title="ADD"
                onPress={goalHandler}
            />
            <Button
                title="CANCEL"
                color="red"
                onPress={props.onCanceInput}
            />
          </View>
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    input: { width: "80%", height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10 },
    button: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
});

export default GoalInput;
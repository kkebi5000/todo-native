import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.innerView}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInputStyle}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  innerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInputStyle: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;
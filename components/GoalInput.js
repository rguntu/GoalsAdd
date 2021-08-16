import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [goal, setGoal] = useState("");

  const setGoalHandler = (goal) => {
    return setGoal(goal);
  };
  const submitHandler = () => {
    props.submitHandler(goal)
    setGoal('')
  }
  return (
    
    <Modal visible={props.modelState} >
    <View style={styles.screen}>
      <TextInput
        style={styles.input}
        onChangeText={setGoalHandler}
        value={goal}
      ></TextInput>
      <View style={styles.buttons}>
        <View style={styles.button}>
      <Button
        title="Add"
        onPress={submitHandler}
      />
      </View>
      <View style={styles.button}>
      <Button
        title="Cancel" color="red"
        onPress={props.cancelHandler}
      />
      </View>
       
      </View>
     
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "stretch",
    width: "80%"
  },
 
  button: {
    width : "40%"
  },
 
});
export default GoalInput;

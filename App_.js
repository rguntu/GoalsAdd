import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goalArray, setGoalArray] = useState([]);
  const goalInputHandler = (enteredGoalText) => {
    setEnteredGoal(enteredGoalText);
  };
 const addGoalHandler = () => {
  setGoalArray(goalArray => {return [...goalArray,enteredGoal]})
 }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add goal..."
          style={styles.inputText}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler}></Button>
      </View>
      <View>
        {goalArray.map((goal) => {
          return (<View style={styles.listItem }  key={goal}><Text>{goal}</Text></View>);
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  inputText: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
   padding: 10,
   marginVertical: 5,
   backgroundColor: '#ccc',
   borderColor: 'black',
   borderWidth: 1
  }
});

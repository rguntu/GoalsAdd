import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from './components/GoalItem'
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goalsList, setGoalsArray] = useState([]);
  const [modelState,setModelState] = useState(false);
  const onGoalTextChange = (goalText) => {
    setGoal(goalText);
    console.log("goalT" + goal);
  };
  const onSubmitGoal = (goalTitle) => {
    setGoalsArray((goalsList) => {
      return [...goalsList, {id: Math.random().toString(),text:goalTitle}];
    });
    setModelState(false);
  };
  const onDeleteHandler = (goalId) => {
   setGoalsArray((goalsList) => {
     return goalsList.filter((goal) => {
       return goal.id !== goalId
     })
   })
  }
  const cancelHandler = () => {
    setModelState(false)
  }
  return (
    //style={{padding:40}}
    <View style={styles.screen}>

      <Button title="Add Goal" onPress={()=>{setModelState(true)}}/>
      <GoalInput cancelHandler={cancelHandler} modelState={modelState} submitHandler={onSubmitGoal}/>
      
      <FlatList
        data={goalsList}
        keyExtractor={(item,key) => {return(item.id)}}
        renderItem={(itemD) => {
          return (
            <GoalItem id={itemD.item.id} onDelete={onDeleteHandler} title={itemD.item.text} />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  }
});

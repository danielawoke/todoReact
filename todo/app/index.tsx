import { Text, View } from "react-native";
import Task from "../components/task";
import { useState } from "react";
import InsertTask from "@/components/insertTask";
import '../styling/layout.css'
import React from 'react';

export default function Index() {
  //first create the stateful tasks array that contains each of the tasks as an object with a taskName,ID, and checked/not checked binary flag
  const [tasks,update] = useState([]);
  //stateful id global varible responsible for diffrentiating tasks for later functions 
  const [id,increment] = useState(0)
  //function that updates the tasks list by adding a new task based on information given from the user given input values
  const addTask = () => {
    //checks if the input is blank, meaning there is no need to add a new element
    if(document.getElementById("taskName").value != ""){
      //creates new stateful array with the new element added to the top
      update([ {taskName:document.getElementById("taskName").value, ID:id, checked:0},...tasks])
      //increments ids
      increment(id+1)
    }
    //resets the task input value to a blank input
    document.getElementById("taskName").value = "";
  };

  //function that crosses off a task
  const checkTask = (ID) => {
    //creates a clone array of the current tasks
    let newArr = [...tasks];
    //iterates through the new array to find the matching index
    for(let i = 0; i<newArr.length; i++){
      if(newArr[i].ID == ID){
        //once found, a new element with the same name and Id for the previous task is created, but not it is marked as checked
        const newEl =  {taskName:newArr[i].taskName, ID:newArr[i].ID, checked:1}
        //remove the old element
        newArr.splice(i, 1); 
        //create new list with the now finsihed task appended to the bottom of the list
        const arr = [...newArr, newEl];
        //update state
        update(arr);
        //break and end function
        break;
      }
    }
  };

  //function responsible for remove tasks when thier garbage icon is clicked on
  const delTask = (ID) => {
    //clone the current tasks array
    let newArr = [...tasks];
    //iterate through cloned array and serach for the match ID
    for(let i = 0; i<newArr.length; i++){
      //once found, remove it from the array and update the state
      if(newArr[i].ID == ID){
        newArr.splice(i, 1); 
        update(newArr);
        break;
      }
    }
  };

  //creates a list of Task components with props specifed by the stateful tasks array 
  const loadTasks = () => {
    //create list of components
    let comps = []
    //iterates through tasks, and adds a new Task component for with parameters specified by the tasks array, as well as 
    //locally defined functions delTask and checkTask
    for(let i = 0; i<tasks.length; i++){
      comps.push(<Task taskName={tasks[i].taskName} checkTask={checkTask} delTask={delTask} ID={tasks[i].ID} check={tasks[i].checked} />)
    }
    //returns the components
    return comps;
  }
  //returning the fully rendered jsx component
  return ( 
    //View to center all dom elements
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        aligntasks: "center",
      }}
    >
      {/* container for the input interface, and the task list underneath it */}
      <div id="container">  
        {/* component for the input interface, passing the add Task function so the + button can call it when clicked on */}
        <InsertTask addTask={addTask}/>
        {/* sub window to contain all tasks so tasks can be scrolled through */}
        <div id="taskContainer">
          {/* rendering all tasks through the call of this function */}
          {loadTasks()}
        </div>  
      </div>  
    </View>
  );
}



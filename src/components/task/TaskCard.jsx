import React from "react";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";
import { Tasks } from "./Tasks";

export const TaskCard = () => {
  const [inputText, setInputText] = React.useState("");
  const [taskList, setTaskList] = React.useState([]);
  return (
    <div className="taskCard">
      <div className="cardTitleAndCardDeleteButtonArea">
        <TaskCardTitle />
        <TaskCardDeleteButton />
      </div>
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        setTaskList={setTaskList}
        taskList={taskList}
      />
      <Tasks
        inputText={inputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
};

import React from "react";
import { Task } from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
      // タスクを並び替える
      const remove = list.splice(startIndex, 1);
      list.splice(endIndex, 0, remove[0]);
}

export const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    let endIndex = taskList.length - 1;
    if (result.destination !== null) {
      endIndex = result.destination.index;
    }

    reorder(taskList, result.source.index, endIndex);
    setTaskList(taskList);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

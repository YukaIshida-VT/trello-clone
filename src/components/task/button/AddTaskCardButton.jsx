import React from "react";
import { v4 as uuid } from "uuid";

export const AddTaskCardButton = ({ setTaskCardsList, taskCardsList }) => {
  const addTaskCard = () => {
    const taskCardId = uuid();
    // タスクカードを追加する
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      },
    ]);
    console.log(taskCardsList)
  };
  return (
    <div className="addTaskCardButtonArea">
      <button className="AddTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};

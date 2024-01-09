import React from "react";

export const TaskAddInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a task" className="taskAddInput" />
      </form>
    </div>
  );
};

import React, { useState } from "react";
import "./AddTask.css";

const AddTask = ({createTask}) => {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(task) {
      createTask(task);
      setTask("");
    }
    else {
      alert("Please enter a task")
    }
  };
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <textarea
        type="text"
        placeholder="Enter Task"
        id="task"
        name="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        maxLength="40"
      />
      <button>ADD TASK</button>
    </form>
  );
};

export default AddTask;

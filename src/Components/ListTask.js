import React, { useState } from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import "./ListTask.css";
import { useSelector, useDispatch } from "react-redux";
import { completeTask, addTask, editTask } from "../Redux/actions/actions";

const ListTask = () => {
  const state = useSelector((state) => ({ ...state.tasks }));
  const [filter, setFilter] = useState("All");
  const dispatch = useDispatch();
  const createTask = (newTask) => {
    dispatch(addTask(newTask));
  };
  const edit = (id, editedTask) => {
    dispatch(editTask({ id, editedTask }));
  };

  return (
    <div>
      <h1>Todo App With Redux</h1>
      <div className="add-filter-container">
        <div>
          <AddTask createTask={createTask} />
        </div>
        <div className="filter-buttons">
          <button
            className={filter === "All" ? "all active" : "all"}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={filter === "To Do" ? "to-do active" : "to-do"}
            onClick={() => setFilter("To Do")}
          >
            To Do
          </button>
          <button
            className={filter === "Done" ? "done active" : "done"}
            onClick={() => setFilter("Done")}
          >
            Done
          </button>
        </div>
      </div>
      <div className="task-list">
        {(filter === "Done"
          ? state.tasks.filter((task) => task.isDone === true)
          : filter === "To Do"
          ? state.tasks.filter((task) => task.isDone === false)
          : state.tasks
        ).map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              description={task.description}
              isDone={task.isDone}
              rotate={task.rotate}
              color={task.color}
              pin={task.pin}
              toggleTasks={() => dispatch(completeTask(task))}
              editTask={edit}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListTask;

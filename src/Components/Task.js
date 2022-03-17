import React, { useState } from "react";
import "./Task.css";

const Task = ({ toggleTasks, description, isDone, id, editTask, rotate, color, pin }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState(description);
  const handleEdit = (e) => {
    e.preventDefault();
    editTask(id, editingTask);
    setIsEditing(false);
  };

  return (
    <div
      className={isDone ? "task completed" : "task"}
      style={{ transform: `rotate(${rotate}deg)`, backgroundColor: `${color}` }}
    >
      {/* <img src={pin} alt="pin" className="pin" /> */}
      {isEditing ? (
        <form
          className="task-edit-form"
          onSubmit={handleEdit}
          style={{ transform: "rotate(-3deg)" }}
        >
          <textarea
            type="text"
            name="task"
            value={editingTask}
            onChange={(e) => setEditingTask(e.target.value)}
            maxLength="40"
            cols={15}
            rows={4}
            className="task-text-edit"
          />
          <button className="task-save-button">
            <i
              className="fa-solid fa-floppy-disk"
              style={{ fontSize: 20 }}
            />
          </button>
        </form>
      ) : (
        <div>
          <p
            className="task-text"
            onClick={toggleTasks}
            style={{ transform: "rotate(-3deg)" }}
          >
            {editingTask}
          </p>
          <i
            onClick={() => setIsEditing(true)}
            className="task-edit-button fa-solid fa-pen-to-square"
            style={{ transform: "rotate(-3deg)", fontSize: 20 }}
          />
        </div>
      )}
    </div>
  );
};

export default Task;

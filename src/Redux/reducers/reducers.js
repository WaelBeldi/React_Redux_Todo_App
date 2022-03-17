import {
  ADD_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
} from "../actionsTypes/actions-types";

import pinBlue from "../../Components/Assets/pin_blue.png"
import pinCyan from "../../Components/Assets/pin_cyan.png"
import pinGreen from "../../Components/Assets/pin_green.png"
import pinPink from "../../Components/Assets/pin_pink.png"
import pinViolet from "../../Components/Assets/pin_blue.png"
import pinYellow from "../../Components/Assets/pin_yellow.png"
import pinRed from "../../Components/Assets/pin.png"

import post_it_yellow from "../../Components/Assets/post_it.png"
import post_it_cyan from "../../Components/Assets/post_it_cyan.png"
import post_it_green from "../../Components/Assets/post_it_green.png"
import post_it_orange from "../../Components/Assets/post_it_orange.png"
import post_it_pink from "../../Components/Assets/post_it_pink.png"
import post_it_violet from "../../Components/Assets/post_it_violet.png"

const bgcolor = () => {
  var color = ["#FF7EB9", "#FFF740", "#7AFCFF", "#74ED4B", "#FFA930", "#E1CEFF"]
  return color[Math.floor(Math.random() * color.length)];
};

const pin = () => {
  var pin = [pinRed, pinYellow, pinBlue, pinCyan, pinGreen, pinPink, pinViolet];
  return pin[Math.floor(Math.random() * pin.length)];
};

const bgImage = () => {
  var image = [post_it_yellow, post_it_cyan, post_it_green, post_it_orange, post_it_pink, post_it_violet];
  return image[Math.floor(Math.random() * image.length)];
};

const initialState = {
  tasks: [
    {
      id: 1,
      description: "Coding",
      isDone: false,
      rotate: Math.floor(Math.random() * 10),
      // color: bgImage(),
      pin: pin()
    },
    {
      id: 2,
      description: "Lunch",
      isDone: true,
      rotate: Math.floor(Math.random() * 10),
      // color: bgImage(),
      pin: pin()
    },
    {
      id: 3,
      description: "Dinner",
      isDone: false,
      rotate: Math.floor(Math.random() * 10),
      // color: bgImage(),
      pin: pin()
    },
  ],
};

const tasksReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: Date.now(),
        description: action.payload,
        isDone: false,
        rotate: Math.floor(Math.random() * 10),
        // color: bgImage(),
        pin: pin()
      };
      console.log(newTask.color);
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case EDIT_TASK:
      const editedTask = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, description: action.payload.editTask };
        }
        return task;
      });
      return {
        ...state,
        tasks: editedTask,
      };
    case COMPLETE_TASK:
      const toggleTasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...action.payload, isDone: !action.payload.isDone }
          : task
      );
      return {
        ...state,
        tasks: toggleTasks,
      };
    default:
      return state;
  }
};

export default tasksReducers;

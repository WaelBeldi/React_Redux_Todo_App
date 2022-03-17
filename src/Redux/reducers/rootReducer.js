import { combineReducers } from "redux";
import tasksReducers from "./reducers";

const rootReducer = combineReducers({
  tasks: tasksReducers,
});

export default rootReducer;

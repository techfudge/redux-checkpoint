import { combineReducers } from "redux";
import taskReducer from "./reducer";


const rootReducer = combineReducers({taskReducer});

export default rootReducer;
import { combineReducers } from "redux";
import { counter } from "./Counter";
import todos from "./todos";

const rootReducer = () => ({
    counter,
    todos
})

export default rootReducer;
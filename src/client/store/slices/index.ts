import { combineReducers } from "redux";
import boardSlice from "./boardSlice.ts";

const appReducer = combineReducers({
  board: boardSlice
});

export * from "./boardSlice.ts";
export default appReducer;
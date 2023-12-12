// src/reducers/index.ts
import { combineReducers } from "@reduxjs/toolkit";
import infoReducer from "./FinancialReport/reducer";

const rootReducer = combineReducers({
  info: infoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

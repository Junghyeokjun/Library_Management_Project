import React from "react";
import { combineReducers } from "redux";
import book from "./book";
import loan from "./loan";
import user from "./user";
const rootReducer = combineReducers({ book, loan, user });

export default rootReducer;

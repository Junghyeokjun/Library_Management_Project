import React from "react";
import { combineReducers } from "redux";
import book from "./book";
import loan from "./loan";
import user from "./user";
import auth from "./auth";
const rootReducer = combineReducers({ book, loan, user, auth });

export default rootReducer;

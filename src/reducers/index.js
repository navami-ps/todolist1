// rootReducer.js
import todoreducers from "./todoreducers";

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    todo: todoreducers, 
});

export default rootReducer;

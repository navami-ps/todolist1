import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index"; // Assuming you have a rootReducer

const store = configureStore({
    reducer: rootReducer, // Use your rootReducer to configure the store
});

export default store;

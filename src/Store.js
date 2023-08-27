import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './features/TaskSlice';
// Create and configure the Redux store
const store = configureStore({
  reducer: {
    tasks: taskReducer, //Set the tasks reducer to manage the tasks state
  },
});

export default store;


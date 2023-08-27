import { createSlice } from '@reduxjs/toolkit';

const TaskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
     // Define the reducers for various actions
    addTask: (state, action) => {
      state.tasks.push(action.payload)
    },
    // Reducer for toggling the status of a task (done/not done)
    toggleTaskStatus: (state, action) => {
      const taskId = action.payload;
      const task = state.tasks.find((task) => task.id === taskId)
      if (task) {
        task.isDone = !task.isDone
      }
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.description = description;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    filterTasks: (state, action) => {
      state.filter = action.payload;
    }
  },
});

export const { addTask, toggleTaskStatus, editTask, deleteTask ,filterTasks} =
  TaskSlice.actions;

export default TaskSlice.reducer;

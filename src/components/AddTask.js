import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/TaskSlice';

function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() !== '') {
      dispatch(addTask({ id: Date.now(), description, isDone: false }));
      setDescription('');
    }
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">Add Task</button>
    </div>
  </form>
  );
}

export default AddTask;

import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTasks } from '../features/TaskSlice';

function FilterTasks() {
  const dispatch = useDispatch();

  const handleFilter = (filter) => {
    dispatch(filterTasks(filter)); // Dispatch the filterTasks action with the selected filter
  };

  return (
    <div className="mb-4 text-center">
    <button className="btn btn-primary me-2" onClick={() => handleFilter('all')}>All</button>
    <button className="btn btn-success me-2" onClick={() => handleFilter('done')}>Done</button>
    <button className="btn btn-danger" onClick={() => handleFilter('not')}>Not Done</button>
  </div>
  );
}

export default FilterTasks;

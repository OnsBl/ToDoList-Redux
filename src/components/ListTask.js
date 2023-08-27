import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function ListTask() {
  const tasks = useSelector(state => state.tasks.tasks); // Retrieve tasks array
  const filter = useSelector(state => state.tasks.filter); // Retrieve filter value
 // Filter tasks based on the selected filter
  const filteredTasks = filter === 'done'
    ? tasks.filter(task => task.isDone)
    : filter === 'not'
    ? tasks.filter(task => !task.isDone)
    : tasks;

  return (
    <div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ListTask;

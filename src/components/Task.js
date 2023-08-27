import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskStatus, editTask, deleteTask } from '../features/TaskSlice';
import { Form, Button } from 'react-bootstrap';

function Task({ task }) {
  const dispatch = useDispatch();
  // State to manage edit mode and edited description
  const [editMode, setEditMode] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggleStatus = () => {
    dispatch(toggleTaskStatus(task.id));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSaveEdit = () => {
    if (editedDescription.trim() !== '') {
      dispatch(editTask({ id: task.id, description: editedDescription }));
      setEditMode(false);
    }
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="task-container mb-3">
    <Form.Check
      type="checkbox"
      checked={task.isDone}
      onChange={handleToggleStatus}
      className="mr-2"
    />
    {editMode ? (
      <>
        <Form.Control
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className="flex-grow-1"
        />
        <Button variant="success" onClick={handleSaveEdit} className="ml-2">
          Save
        </Button>
      </>
    ) : (
      <>
        <span className="flex-grow-1">{task.description}</span>
        <Button variant="info" onClick={handleEdit} className="mr-2">
          Edit
        </Button>
        <Button variant="danger" onClick={handleDeleteTask}>
          Delete
        </Button>
      </>
    )}
  </div>
  );
}

export default Task;

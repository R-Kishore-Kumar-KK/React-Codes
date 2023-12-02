import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo);

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleSave = () => {
    onEdit(todo, editedTask);
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{todo}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(todo)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;

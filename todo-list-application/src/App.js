import React, { useState } from 'react';
import './App.css';  // You can create this CSS file for styling

function App() {
  // Define a state variable to manage the to-do list
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  // Function to add a new to-do item
  const addTodo = () => {
    if (task) {
      setTodos([...todos, task]);
      setTask('');
    }
  }

  // Function to remove a to-do item
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

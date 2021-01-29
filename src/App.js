import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  )
}


function App() {

  const [todos, setTodos] = useState([
    {
      text: 'learn React',
      isCompleted: false
    },
    {
      text: 'learn Javascript',
      isCompleted: false
    },
    {
      text: 'learn PHP',
      isCompleted: false
    }
  ]);

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;

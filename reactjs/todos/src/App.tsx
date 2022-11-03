import React, { useState } from 'react';
import './App.css';
import { TextInput } from './components/input';
import { TodoList } from './components/TodoList';
import { Todo } from './models/todo';

function App() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("new todo value is ", todo);
    setTodos((curTodos) => [...curTodos, { task: todo, status: false, id: Math.random() * 10000}]);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h3>Todos</h3>
        <TextInput todo={todo} setTodo={setTodo} handleAdd={addTodo}/>
      </header>

      <TodoList todos={todos} />
    </div>
  );
}

export default App;

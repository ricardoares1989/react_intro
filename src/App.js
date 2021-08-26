import React from 'react';
import './App.css';
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton} from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";

const todos = [
  {text: 'Pruebas de performance', completed: true},
  {text: 'Revisar mesas de diseño', completed: false},
  {text: 'Revisar configuracion de function', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;

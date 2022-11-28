import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
/* import './App.css'; */

const todos = [
  {
    text: 'Cortar cebolla',
    completed: false
  },
  {
    text: 'Tomar el curso de intro a React',
    completed: false
  },
  {
    text: 'Llorar con la llorona',
    completed: false
  },
]

function App(props) {
  return (
    <React.Fragment>

      <ToDoCounter/>

      <ToDoSearch/>

      <ToDoList>
        {todos.map(todo => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed="todo.completed"
          />
        ))}
      </ToDoList>
      
      <CreateToDoButton/>
    </React.Fragment>
  );
}

export default App;

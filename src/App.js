import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
/* import './App.css'; */

const defaultToDos = [
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
  const [toDos, setToDos] = React.useState(defaultToDos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedToDos = toDos.filter(toDo => toDo.completed === true).length
  const totalToDos = toDos.length

  let searchedToDos = []

  if(!searchValue.length >= 1){
    searchedToDos = toDos
  }else{
    searchedToDos = toDos.filter(toDo => {
      const toDoText = toDo.text.toLowerCase()
      const searchedText = searchValue.toLowerCase()
      return toDoText.includes(searchedText)
    })
  }

  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text)
    const newToDos = [... toDos]
    newToDos[toDoIndex].completed = true
    setToDos(newToDos)
  }
  const DeleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text)
    const newToDos = [... toDos]
    newToDos.splice(toDoIndex, 1)
    setToDos(newToDos)
  }
  return (
    <React.Fragment>

      <ToDoCounter
        total={totalToDos}
        completed={completedToDos}
      />

      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <ToDoList>
        {searchedToDos.map(toDo => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => completeToDo(toDo.text)}
            onDelete={() => DeleteToDo(toDo.text)}
          />
        ))}
      </ToDoList>
      
      <CreateToDoButton/>
    </React.Fragment>
  );
}

export default App;

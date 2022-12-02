import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext()

function ToDoProvider (props) {
    const {
        item: toDos,
        saveItem: saveToDos,
        loading,
        error,
      } = useLocalStorage('ToDos_V1', []) 
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
        saveToDos(newToDos)
      }
      const deleteToDo = (text) => {
        const toDoIndex = toDos.findIndex(toDo => toDo.text === text)
        const newToDos = [... toDos]
        newToDos.splice(toDoIndex, 1)
        saveToDos(newToDos)
      }
    
    return (
        <ToDoContext.Provider
            value={{
                loading,
                error,
                totalToDos,
                completedToDos,
                searchValue,
                setSearchValue,
                searchedToDos,
                completeToDo,
                deleteToDo,
            }}
        >
            {props.children}
        </ToDoContext.Provider>
    );
}

<ToDoContext.Consumer></ToDoContext.Consumer>

export {ToDoContext, ToDoProvider}


import React from "react";
import { AppUI } from "./AppUI";

/* const defaultToDos = [
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
] */

function useLocalStorage (itemName, initialValue) {
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [item, setItem] = React.useState(initialValue)
  
  React.useEffect(() => {
    setTimeout(() => {

      try {
        const localStorageItem = localStorage.getItem(itemName)
        
        let parsedItem
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = []
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        setItem(parsedItem)
        setLoading(false)

      } catch (error){
        setError(error)
      }
    }, 500)
  })
  

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)

    } catch (error) {
        setError(error)
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

function App(props) {
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
  const DeleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text)
    const newToDos = [... toDos]
    newToDos.splice(toDoIndex, 1)
    saveToDos(newToDos)
  }
  return (
    <AppUI
      loading={loading}
      error={error}
      totalToDos={totalToDos}
      completedToDos={completedToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      DeleteToDo={DeleteToDo}
    />
  );
}

export default App;

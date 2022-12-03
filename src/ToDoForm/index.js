import React from "react";
import { ToDoContext } from "../ToDoContext";
import './ToDoForm.css'

function ToDoForm () {
    const [newToDoValue, setNewToDoValue] = React.useState('')
    const {
        addToDo,
        setOpenModal
    } = React.useContext (ToDoContext)
    const onChange = (event) => {
        setNewToDoValue(event.target.value)
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit= (event) => {
        event.preventDefault()
        addToDo(newToDoValue)
    }
    
    return (
        <form onSubmit={onSubmit}>
            <label>Crear To - Do</label>
            <textarea
            value={newToDoValue}
            onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {ToDoForm}
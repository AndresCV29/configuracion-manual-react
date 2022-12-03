import React from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import { Modal } from "../Modal";

function AppUI () {
    const {
        error,
        loading,
        searchedToDos,
        completeToDo,
        deleteToDo,
        openModal,
        setOpenModal
    } = React.useContext(ToDoContext)

    return (
        <React.Fragment>
            <ToDoCounter/>
            <ToDoSearch/>

            <ToDoList>
                {error && <p>Hubo un error - ❌</p>}
                {loading && <p>Cargando ⏳ ...</p>}
                {(!loading && !searchedToDos.length) && <p>Crea to primer To-Do 📝</p>}

                {searchedToDos.map(toDo => (
                <ToDoItem
                    key={toDo.text}
                    text={toDo.text}
                    completed={toDo.completed}
                    onComplete={() => completeToDo(toDo.text)}
                    onDelete={() => deleteToDo(toDo.text)}
                />
                ))}
            </ToDoList>

            {openModal && (
                <Modal>
                <p>TELETRANSPORTACION!!! 🕳</p>
            </Modal>
            )}

            <CreateToDoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export {AppUI};
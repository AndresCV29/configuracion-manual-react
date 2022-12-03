import React from "react";
import './CreateToDoButton.css'

function CreateToDoButton ({setOpenModal}) {
    const onClickButton = () => {
        setOpenModal(prevState => !prevState)
    }
    return (
        <button
            className="CreateToDoButton"
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export {CreateToDoButton}
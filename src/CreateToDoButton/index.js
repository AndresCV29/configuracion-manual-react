import React from "react";
import './CreateToDoButton.css'

function CreateToDoButton ({setOpenModal}) {
    const onClickButton = () => {
        setOpenModal(true)
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
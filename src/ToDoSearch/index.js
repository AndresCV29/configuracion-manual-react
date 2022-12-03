import React from "react";
import { ToDoContext } from "../ToDoContext";
import './ToDoSearch.css';

function ToDoSearch () {
    const {searchValue, setSearchValue} = React.useContext(ToDoContext)
    const [] = React.useState('')

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <input
            className="ToDoSearch"
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}

export {ToDoSearch};
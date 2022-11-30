import React from "react";
import './ToDoSearch.css';

function ToDoSearch ({searchValue, setSearchValue}) {

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
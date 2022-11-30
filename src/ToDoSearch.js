import React from "react";
import './ToDoSearch.css';

function ToDoSearch () {

    const [searchValue, setSearchValue] = React.useState('')

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return [
        <input
            className="ToDoSearch"
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />,
        <p>
            {searchValue}
        </p>
    ]
}

export {ToDoSearch};
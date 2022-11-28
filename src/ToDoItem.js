import React from 'react';
import './ToDoItem.css';

function ToDoItem(props) {
  return (
    <li className="ToDoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        √
      </span>
      <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--completed'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { ToDoItem };
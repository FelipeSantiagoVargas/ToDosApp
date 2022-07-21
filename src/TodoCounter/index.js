import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";


function TodoCounter(){
    const {totalTodos,completedTodos} = React.useContext(TodoContext)
    return(
        <div className="header">
            <h2 className="header__title">Has completado {completedTodos} de {totalTodos} todos</h2>
        </div>
    )
}

export {TodoCounter};
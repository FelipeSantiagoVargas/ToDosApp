import React from "react";
import "./TodoItem.css";

function TodoItem(props){

    const onComplete = ()=>{
        alert("Ya completaste el ToDo" + props.text)
    }


    const onDelete = ()=>{
        alert("Deseas borrar el ToDo" + props.text)
    }

    return(
        <li className="list">
            <span onClick={props.onComplete} className={`list__check ${props.completed ? "list__check--completed":"list__check--incomplete"}`}><img className="list__check__image" src="./check.png"></img></span>
            <p className={props.completed ? "list__check__text--completed":"list__check__text--incomplete"}>{props.text}</p>
            <span onClick={props.onDelete} className="list__cancel"><img className="list__cancel__image" src="./remove.png"></img> </span>
        </li>
    )
}

export {TodoItem}
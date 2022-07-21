import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButtom(props){

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }

    return(
        <button onClick={onClickButton} className="addbutton">Add ToDo</button>
    );
}

export { CreateTodoButtom};
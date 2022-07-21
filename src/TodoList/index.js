import React from "react";
import "./TodoList.css"

function TodoList(props){
    return(
        <section className="section">
            <ul className="section__list">
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList}
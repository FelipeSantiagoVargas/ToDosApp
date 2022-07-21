import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css"

function TodoSearch(){

    const {searchValue,setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value)
    }

    return(
        <div className="search">
            <span className="search__logo"> <span className="search__logo--ready"></span>  <img alt="logo" className="search__logo__image" src="./search.png"></img> </span>
            <input onChange={onSearchValueChange} value={searchValue} className="search__input" placeholder="Cebolla" />
        </div>
    )
}

export {TodoSearch}
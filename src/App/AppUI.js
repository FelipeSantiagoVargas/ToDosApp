import React from "react";
import { CreateTodoButtom } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { Modal } from "../Modal";
import "./App.css";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <div className="container">
        <TodoSearch />

        <TodoList>
          {error && <p>Desesperate, hubo un error...</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {!loading && !searchedTodos.length && <p>Crea tu primer TODO!!!</p>}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {openModal && (
          <Modal>
            <TodoForm></TodoForm>
          </Modal>
        )}

        <CreateTodoButtom setOpenModal={setOpenModal}/>
      </div>
    </React.Fragment>
  );
}

export { AppUI };

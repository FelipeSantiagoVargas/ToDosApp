import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    if (newTodoValue.length <= 0) {
      alert("El ToDo no puede estar vacio");
    } else {
      event.preventDefault();
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <label className="form-title">Escribe tu nuevo ToDo</label>
      <textarea
        className="form-input"
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo.."
      />
      <div className="form-buttons">
        <button
          className="form-buttons-btn form-buttons-btn_cancel "
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="form-buttons-btn form-buttons-btn_add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };

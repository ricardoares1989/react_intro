import React from "react";
import { TodoContext } from "./TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoText, setNewTodoText] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoText(event.target.value);
  };

  const onAdd = (event) => {
    // ESte metodo nos ayuda a que cuando se envie el formulario
    // no se recarge la pagina.
    event.preventDefault();
    addTodo(newTodoText);
    setOpenModal(false);
  };
  return (
    <form onSubmit={onAdd}>
      <label >...</label>
      <textarea
        value={newTodoText}
        onChange={onChange}
        cols="30"
        rows="10"
        placeholder="Escribe to todo!"
      />
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button-cancel" type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button-add" type="submit">Añadir todo!</button>
      </div>
    </form>
  );
}

export { TodoForm };

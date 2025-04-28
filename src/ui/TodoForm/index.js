import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoForm.css';

function TodoForm({ label, submitText, submitEvent, defaultTodoText }) {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = React.useState(defaultTodoText || '');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    navigate('/');
  };
  const onSubmit = (event) => {
    event.preventDefault();
    submitEvent(newTodoValue);
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{label}</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribir Tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          {submitText}
        </button>
      </div>
    </form>
  );
}

// 💥💥💥 ESTA LÍNEA
export default TodoForm;

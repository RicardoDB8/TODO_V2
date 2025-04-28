import React from 'react';
import { useTodos } from '../useTodos';
import TodoForm from '../../ui/TodoForm';

function NewTodoPage() {
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;
  
  return (
    <TodoForm
      label="Escribe tu nueva Tarea"
      submitText="Añadir"
      submitEvent={(text) => addTodo(text)}
    />
  );
}

export default NewTodoPage;

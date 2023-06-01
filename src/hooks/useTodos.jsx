import { useState } from 'react';

const useTodos = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue);

  const addTodo = (text) => {
    return todos.concat({ text, checked: false });
  };

  const checkTodo = (idx) => {
    setTodos(
      todos.map((todo, index) => {
        if (idx === index) {
          todo.checked = !todo.checked;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (idx) => {
    return todos.filter((_, index) => idx !== index);
  };

  return { todos, addTodo, deleteTodo, checkTodo };
};

export default useTodos;

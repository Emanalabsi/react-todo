import React from 'react';
import Layout from './components/Layout';
import AddTodo from './components/AddTodo';
import useInput from './hooks/useInput';
import useTodos from './hooks/useTodos';
import TodoList from './components/TodoList';

const App = (props) => {
  const { inputValue, changeInput, keyChange, clearInput } = useInput();
  const { todos, addTodo, checkTodo, deleteTodo } = useTodos();

  const clearInputAndAddTodo = () => {
    clearInput('');
    addTodo(inputValue);
  };

  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={(event) => keyChange(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        onItemCheck={(idx) => checkTodo(idx)}
        onItemDelete={(idx) => deleteTodo(idx)}
      />
    </Layout>
  );
};

export default App;

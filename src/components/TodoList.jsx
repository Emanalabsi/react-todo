import React from 'react';
import { List, Paper } from '@mui/material';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <>
      {props.todos.length > 0 && (
        <Paper style={{ margin: 16 }}>
          <List style={{ overflow: 'scroll' }}>
            {props.items.map((todo, idx) => (
              <TodoItem
                {...todo}
                key={`TodoItem.${idx}`}
                divider={idx !== props.items.length - 1}
                onButtonClick={() => props.onTodoDelete(idx)}
                onCheckBoxToggle={() => props.onTodoCheck(idx)}
              />
            ))}
          </List>
        </Paper>
      )}
    </>
  );
}

export default TodoList;

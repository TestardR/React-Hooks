import React, { Fragment, useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const intputChangeHandler = e => {
    setTodo(e.target.value);
  };

  const todoAddHandler = () => {
    setTodoList(todoList.concat(todo));
  };

  return (
    <Fragment>
      <input
        type="text0"
        placeholder="Todo"
        value={todo}
        onChange={intputChangeHandler}
      />
      <button type="button" onClick={todoAddHandler}>
        Add
      </button>
      <ul>
        {todoList.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Todo;

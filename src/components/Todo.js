import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    axios
      .get('https://react-hook-fdd12.firebaseio.com/todos.json')
      .then(res => {
        const todosData = res.data;
        const todos = [];
        for (const key in todosData) {
          todos.push({ id: key, name: todosData[key].name });
        }
        setTodoList(todos);
        console.log(todos);
      });
  }, [todo]);

  const intputChangeHandler = e => {
    setTodo(e.target.value);
  };

  const todoAddHandler = () => {
    axios
      .post('https://react-hook-fdd12.firebaseio.com/todos.json', {
        name: todo
      })
      .then(res => {
        const todoItem = { id: res.data.name, name: todo };
        setTodoList(todoList.concat(todoItem));
      })
      .catch(err => {
        console.log(err);
      });
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
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Todo;

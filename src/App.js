import React, { useState } from 'react';
import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';

const App = () => {
  const [page, setPage] = useState('auth');

  const switchpage = pageName => {
    setPage(pageName);
  };

  return (
    <div className="App">
      <Header
        onLoadTodos={switchpage.bind(this, 'todos')}
        onLoadAuth={switchpage.bind(this, 'auth')}
      />
      <hr />
      {page === 'auth' ? <Auth /> : <Todo />}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';
import AuthContext from './auth-context';

const App = () => {
  const [page, setPage] = useState('auth');
  const [authStatus, setAuthStatus] = useState(false);

  const switchpage = pageName => {
    setPage(pageName);
  };

  const login = () => {
    setAuthStatus(true);
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ status: authStatus, login: login }}>
        <Header
          onLoadTodos={switchpage.bind(this, 'todos')}
          onLoadAuth={switchpage.bind(this, 'auth')}
        />
        <hr />
        {page === 'auth' ? <Auth /> : <Todo />}
      </AuthContext.Provider>
    </div>
  );
};

export default App;

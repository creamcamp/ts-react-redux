import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UserList } from './components/UserList/UserList';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserList />
        <hr />
        <TodoList />
      </header>
    </div>
  );
}

export default App;

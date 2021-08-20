import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UserList } from './components/UserList/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserList />
      </header>
    </div>
  );
}

export default App;

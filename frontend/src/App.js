import React from 'react';
import './App.css';
import TopHeader from './components/TopHeader';
import Menu from './components/Menu';
import Login from './components/Login';

const App = () => {
  return (
    <div className="App">
      <TopHeader />
      <Menu />
      <Login />
    </div>
  );
}

export default App;

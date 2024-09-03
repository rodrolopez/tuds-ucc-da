import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Login from './components/Login';

function App(){
const menuVisivility = true;
const roles = [];
  return (
      <div className="App">
        <Menu menuVisivility={ menuVisivility } roles = { roles }/>

        <Routes>
          <Route path="/" element={ <div></div> }/>
          <Route path="login" element={ <Login/> }/>

        </Routes>
        
      </div>
  );
}


export default App;

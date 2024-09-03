/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom'; 

const Menu = ({ menuVisivility, roles }) => {
  const [isOpen, setIsOpen] = useState(menuVisivility);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const items = [
    {
      key: "login",
      to: "login",
      label: "Login",
      roles: []
    },
    { 
      key: "user-list",
      to: "user-list",
      label: "Usuarios",
      roles: ['admin']
    },
    {
      key: 'admin',
      to: "opcion2",
      label: "Usuarios",
      roles: [ 'admin' ]
    },
    {
      key: 'opcion2',
      to: "opcion2",
      label: "Usuarios",
      roles: [ 'abc' ]
    },
  ];
  let filteredItems;
  if (!roles.length) {
    filteredItems = items.filter(item => !item.roles.length);
  } else {
    filteredItems = items.filter(item => item.roles.filter(role => roles.includes(role)).length);
  }
  const lista = filteredItems.map(item => <li><Link to={ item.to }>{ item.label }</Link></li>);
  return (
    <nav id="MainMenu">
      <ul>{ lista }</ul>
      <button className="menuButton" onClick={toggleMenu}>
        Menu
      </button>
      {isOpen && (
        <div className="menuContent">
          [list]   
        </div>
      )}
    </nav>
  );
}

export default Menu;




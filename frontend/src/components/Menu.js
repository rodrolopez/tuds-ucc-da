/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Menu.css'; 

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="MainMenu">
      <button className="menuButton" onClick={toggleMenu}>
        Menu
      </button>
      {isOpen && (
        <div className="menuContent">
          <a href="#">INFORMACION</a>
          <a href="#">EXAMENES</a>
          <a href="#">FORO</a>          
        </div>
      )}
    </div>
  );
}

export default Menu;




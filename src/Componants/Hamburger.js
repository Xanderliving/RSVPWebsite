import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hamburger.css'

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
      </div>
      <ul className={isOpen ? "open" : ""}>
        <li><Link to="/wedding" onClick={toggleMenu}>Who's coming to the wedding (ceremony only)</Link></li>
        <li><Link to="/afters" onClick={toggleMenu}>Who's coming to the wedding (ceremony and afters)</Link></li>
        <li><Link to="/notcoming" onClick={toggleMenu}>Who's not coming</Link></li>
        <li><Link to="/food" onClick={toggleMenu}>What food have people chosen</Link></li>
      </ul>
    </nav>
  );
}

export default Hamburger;
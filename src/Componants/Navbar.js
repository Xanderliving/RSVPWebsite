import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ userRole }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/upload-pictures">Upload Wedding Pictures</Link>
        </li>
        <li>
          <Link to="/q&a">Q&A</Link>
        </li>
        {userRole === 'after' && (
          <li>
            <Link to="/after-details">Afters Details Page</Link>
          </li>
        )}
        {userRole === 'ceremony' && (
          <li>
            <Link to="/ceremony-details">Ceremony Details Page</Link>
          </li>
        )}
        {(userRole === 'owner' || userRole === 'ceremony') && (
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;

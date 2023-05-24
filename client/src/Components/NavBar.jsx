import React from 'react';
import '../assets/styles/layout.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <Link to="/" className="logo-name">NuvoShop</Link>
          </div>
          <nav>
            <ul id="MenuItems">
              <li><Link to="/">Home</Link></li>
              <li><Link to="signup">SignUp</Link></li>
              <li><Link to="signin">SignIn</Link></li>
              <li><i className="fa-solid fa-arrow-right-from-bracket" /></li>
            </ul>
          </nav>
          <Link to="cart"><i className="fa fa-shopping-cart" /></Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

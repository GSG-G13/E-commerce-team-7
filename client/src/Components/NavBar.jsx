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
              <li><Link to="product">Products</Link></li>
            </ul>
          </nav>
          <Link to="cart"><img src="https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg" alt="cart" width="30px" height="30px" /></Link>
          <img src="https://i.ibb.co/6XbqwjD/menu.png" alt="" className="menu-icon" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

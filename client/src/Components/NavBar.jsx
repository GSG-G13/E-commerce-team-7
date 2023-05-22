import React from 'react'
import '../assets/styles/layout.css'

function NavBar() {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <a href="index.html" className="logo-name">NuvoShop</a>
          </div>
          <nav>
            <ul id="MenuItems">
              <li><a href="index.html">Home</a></li>
              <li><a href="product.html">Products</a></li>
            </ul>
          </nav>
          <a href="cart.html"><img src="https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg" alt="" width="30px" height="30px" /></a>
          <img src="https://i.ibb.co/6XbqwjD/menu.png" alt="" className="menu-icon" />
        </div>
      </div>
    </div>
  )
}

export default NavBar
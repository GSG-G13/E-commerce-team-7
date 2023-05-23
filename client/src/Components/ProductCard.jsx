import React from 'react';
import '../assets/styles/cards.css';
import { Link } from 'react-router-dom';

function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-tumb">
        <img src="https://w7.pngwing.com/pngs/323/773/png-transparent-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running-sneakers-thumbnail.png" width="100%" alt="" />

      </div>
      <div className="product-details">
        <span className="product-catagory">Shoes, boot</span>
        <h4><a href="#link">Men leather boot</a></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
        <div className="product-bottom-details">
          <div className="product-price">$230.99</div>
          <div className="product-links">
            <Link href="#link"><i className="fa fa-shopping-cart" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

/* eslint-disable no-unused-vars */
import React from 'react';
import '../assets/styles/cards.css';
import { Link } from 'react-router-dom';

function ProductCard({
  product: {
    name, image, description, price, discount, details,
  },
}) {
  return (
    <div className="product-card">
      <div className="product-tumb">
        <img src={image} width="100%" alt="" />

      </div>
      <div className="product-details">
        <span className="product-catagory">{details}</span>
        <h4><a href="#link">{description}</a></h4>
        <p>{details}</p>
        <div className="product-bottom-details">
          <div className="product-price">{price}</div>
          <div className="product-links">
            <Link href="#link"><i className="fa fa-shopping-cart" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

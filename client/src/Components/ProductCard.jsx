/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../assets/styles/cards.css';
import { Link, NavLink } from 'react-router-dom';

function ProductCard({
  product: {
    // eslint-disable-next-line react/prop-types
    name, image, id, description, price, discount, details,
  },
}) {
  return (
    <>
      <Link to={`product/${id}`}> link</Link>
      <div className="product-card">
        <div className="product-tumb">
          <img src={image} width="100%" alt="" />
        </div>
        <div className="product-details">
          <span className="product-catagory">{details}</span>
          <h4>{description}</h4>
          <p>{details}</p>
          <div className="product-bottom-details">
            <div className="product-price">{price}</div>
            <div className="product-links">
              <Link to="/"><i className="fa fa-shopping-cart" /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../assets/styles/cards.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function ProductCard({
  product: {
    // eslint-disable-next-line react/prop-types
    name, image, id, description, price, discount, details,
  },
}) {
  const navigate = useNavigate();
  const addToCart = (productId) => {
    const token = document.cookie;
    if (token.startsWith('token')) {
      fetch(`/api/add-to-cart/${productId}`)
        .then((data) => data.json());
    } else {
      navigate('/signin');
    }
  };
  return (
    <div className="product-card">
      <div className="product-tumb">
        <Link to={`product/${id}`}>
          <img src={image} width="100%" alt="product" />
        </Link>
      </div>
      <div className="product-details">
        <span className="product-catagory">{name}</span>
        <h4>{description}</h4>
        <p>{details}</p>
        <div className="product-bottom-details">
          <div className="product-price">{price}</div>
          <div className="product-links">
            <Link onClick={() => addToCart(id)}>
              <i className="fa fa-shopping-cart" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

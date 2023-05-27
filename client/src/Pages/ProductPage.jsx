import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import '../assets/styles/productPgae.css';

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`/api/product/${id}`)
      .then((data) => data.json())
      .then((res) => setProduct(res));
  }, []);

  const addToCart = (productId) => {
    fetch(`/api/add-to-cart/${productId}`)
      .then((data) => data.json());
  };

  return (
    <div className="product-page">
      <h1 style={{ fontWeight: '300', padding: '10px' }}>product</h1>
      <div className="product-table">
        <div className="product-image">
          <img src={product.image} width="100%" alt="product" />
        </div>
        <div className="product-details  product-details1">
          <div className=" product-name1">{product.name}</div>
          <div className="product-articlenr1">{product.description}</div>
          <div className="product-options">
            <p>{product.details}</p>
            <span className="price-product price">Price:</span>
            <span className="p-price">
              {product.price}
              $
            </span>
          </div>
          <button
            type="button"
            data-toggle="tooltip"
            title="Ta bort"
            className="add-tocart"
            onClick={() => addToCart(product.id)}
          >
            Add to cart

          </button>
        </div>
      </div>
    </div>
  );
}

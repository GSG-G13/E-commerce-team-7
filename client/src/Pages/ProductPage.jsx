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
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDxAQEhAQERAQEBAQFRUVFRUWFhUVFRUYFhUVFRUYHighGBslHRcVITEhJSktLi4uGCAzODMtNygtLisBCgoKDg0OGhAQGzElHyUtLS0tLS0vLS0tLS0tLy0tLS0tLS0tLS0tLS0tKy01LS4tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBAUHBgj/xABIEAABAwEEBgcEBAwEBwAAAAABAAIRAwQhMUEFElFhcYEGByKRobHwEzJSwWKCktEUFiNCQ0RyorLC4fEzU2PSF2Rlc4OTw//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACERAQEAAgEEAwEBAAAAAAAAAAABAhEDEiExQQQTUfAU/9oADAMBAAIRAxEAPwDswUqkKpAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREEBSoClAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQESEQQFKQiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiKUEIpUoISFKIISFKIISFKIIRSiClFUoQQiIgIiICIiAiIgIiwtK6VoWVgfWqCm1ztUXElx2BoBJQZqLD0dpShaG61KoHi/DdcbisxAREQFKhVIIhSiICICiAiIgIiICIiAiIgIiIIUKpQUEIiICIiAiIgLxHWJRc2to+1RrUqNVzHDLWc5jmzx1C3iRtXt1Ztllp1qb6VRofTeC1zTgQos3E43V28hpaq2z6QoWqmfyNsZrOjAvpxLuLqZj6i9quWdIm1bG+lZHk1KTaza9CocdQy2o130u1ftgH84hetf03sDGiajiQACA2L4vvdAPJZzOS3ba8eWUmu70yleHtHWPQHuUi7e54A/dDlgVeseplToNyvcTyyvS82JPj8l9OjqVymv1iWgzFSkzgxp83HyWJW6bWp360RM4BrY7m38pUffPxafFzdctdpZSpuqVHBjGNLnOOAAXHemHTuvai5lFzqNnwgGHPG1xF/L+61+l9N1rRTNOpaatRshxbrmDGAvZETtWoNnpkTrndPis8+W2N+L48xvfu6x1Wac/CLI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" width="100%" alt="product" />
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

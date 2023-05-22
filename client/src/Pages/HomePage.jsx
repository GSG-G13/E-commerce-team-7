/* eslint-disable import/prefer-default-export */
import React from 'react';
import '../assets/styles/layout.css';
import ProductCard from '../Components/ProductCard';

export function HomePage() {
  return (
    <div className="small-container">
      <div className="row row-2">
        <h2>All Products</h2>
        <select>
          <option value="">Default Shorting</option>
          <option value="">Short by price</option>
          <option value="">Short by popularity</option>
          <option value="">Short by rating</option>
          <option value="">Short by sale</option>
        </select>
      </div>
      <div className="product-list">
        <ProductCard />
      </div>
      <div className="page-btn" id="pagination">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </div>
  );
}

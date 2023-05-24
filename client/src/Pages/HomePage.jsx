/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import '../assets/styles/layout.css';
import ProductCard from '../Components/ProductCard';

export function HomePage() {
  const [category, setCategory] = useState(0);
  const [price, setPrice] = useState('0');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api//products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const filterData = products.filter((product) => product.category_id === +category || +category === 0).filter((product) => product.price > price);
  console.log(filterData);
 

  return (
    <div className="small-container">
      <div className="row row-2">
        <h2>All Products</h2>
        <input type="range" id="points" name="points" min="0" max="500" onChange={(e) => setPrice(e.target.value)} />
        <select value={category} onChange={handleCategory}>
          <option value="0">All</option>
          <option value="5">Short by sweater</option>
          <option value="1">Short by shoes</option>
          <option value="2">Short by shirt</option>
          <option value="3">Short by jacket</option>
          <option value="4">Short by trousers</option>
        </select>
      </div>
      <div className="product-list">
        {filterData.map((product) => <ProductCard product={product} key={product.id} />)}
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

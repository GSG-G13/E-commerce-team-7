/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import '../assets/styles/layout.css';
import ProductCard from '../Components/ProductCard';

export function HomePage() {
  const [category, setCategory] = useState(0);
  const [price, setPrice] = useState('0');
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items to display per page

  useEffect(() => {
    fetch('http://localhost:3000/api//products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const filterData = products.filter((product) => product.category_id === +category || +category === 0).filter((product) => product.price > price);
  const totalPages = Math.ceil(filterData.length / itemsPerPage);

  // Get the current page's data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
        {currentItems.map((product) => <ProductCard product={product} key={product.id} />)}
      </div>
      <div className="page-btn" id="pagination">
        <span onClick={() => handlePageChange(1)}>1</span>
        <span onClick={() => handlePageChange(2)}>2</span>
        <span onClick={() => handlePageChange(3)}>3</span>
        <span onClick={() => handlePageChange(4)}>4</span>
        <span onClick={() => handlePageChange(5)}>5</span>
      </div>
    </div>
  );
}

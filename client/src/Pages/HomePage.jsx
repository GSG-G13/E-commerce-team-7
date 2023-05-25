/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import '../assets/styles/layout.css';
import ProductCard from '../Components/ProductCard';

export function HomePage() {
  const [category, setCategory] = useState(0);
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const itemsPerPage = 4;
  const categoryOptions = ['All', 'Short by shoes', 'Short by shirts', 'Short by jacket', 'short by trousers ', 'Short by sweater'];

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const filterData = products.filter((product) => product.category_id === +category || +category === 0)
    .filter((product) => +product.price > +price);
  const totalPages = Math.ceil(filterData.length / itemsPerPage);

  // Get the current page's data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);
  if (search) {
    currentItems = products.filter((product) => product.name.startsWith(search));
  }

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="parent">
      <aside className="sidebar">
        <p className="filter-title">Filters</p>
        <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <fieldset className="price-filter">
          <legend>Price</legend>
          <input type="range" min={0} max={9} value={price} onChange={(e) => { setPrice(e.target.value); }} />
        </fieldset>
        <fieldset className="category-filter">
          <legend>Category</legend>
          <div className="radio-container">
            {
              categoryOptions.map((option, index) => (
                <label htmlFor={option} className="radio-label" key={index}>
                  <input className="cat-input" id={option} name="category" type="radio" value={index} onChange={handleCategory} />
                  {option}
                </label>
              ))
              }
          </div>
        </fieldset>

      </aside>
      <div className="small-container">
        <div className="row row-2">
          <h2 className="product-title">All Products</h2>
        </div>
        <div className="product-list">
          {currentItems.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
        <div className="page-btn" id="pagination">
          {Array(totalPages).fill().map((page, i) => <span key={i} onClick={() => handlePageChange(i + 1)}>{i + 1}</span>)}
        </div>
      </div>
    </div>
  );
}

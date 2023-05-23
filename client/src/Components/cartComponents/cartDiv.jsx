/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
export default function CartDiv({
  cart: {
    description, details, product_id , price, id,
  }, sendfetch1, fetch1,
}) {
  const [countNum, setCountNum] = useState(0);

  const handlerDelete = () => {
    axios.delete(`http://localhost:3000/api/product/${id}`)
      .then((data) => {
        sendfetch1(!fetch1)
      });
  };

  const decrementHandler = () => {
    console.log(product_id);
    fetch(`http://localhost:3000/api/decrement/${product_id}`)
      .then(((res) => res.json()))
      .then(({count}) => setCountNum(count));
  };
  const incrementHandler = () => {
    console.log(product_id);
    fetch(`http://localhost:3000/api/increment/${product_id}`)
    .then(((res) => res.json()))
    .then(({count}) => setCountNum(count));
  }


    // fetch(`http://localhost:3000/api/decrement/${id}`)
  
  // };
  // const incrementHandler = () => {
  //   fetch(`http://localhost:3000/api/increment/${id}`)
  //     .then(res => res.json())
  //     .then(() => setCountNum(count));
  // };

  return (

    <div className="row cart-row">
      <div className="col-xs-12 col-md-2">
        <img src="https://w7.pngwing.com/pngs/323/773/png-transparent-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running-sneakers-thumbnail.png" width="100%" alt="" />
      </div>
      <div className="col-md-6 details">
        <div className="product-name">{description}</div>
        <div className="product-articlenr">{details}</div>
        <div className="product-options">
          <span>Price</span>
          <span>{price}</span>
        </div>
        <div className="qtySelector text-center">
          <button type="button" className="decreaseQty" onClick={decrementHandler}>_</button>
          <p className="qtyValue">{countNum}</p>
          <button type="button" className="increaseQty" onClick={incrementHandler}>+</button>
        </div>
      </div>
      <div className="col-md-3 cart-actions">
        <div className="product-delete">
          <button type="button" data-toggle="tooltip" title="Ta bort" className="delete" onClick={handlerDelete}>X</button>
        </div>
      </div>
    </div>
  );
}

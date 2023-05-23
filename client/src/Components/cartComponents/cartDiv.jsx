import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

// eslint-disable-next-line react/prop-types
export default function CartDiv({
  cart: {
    description, details, price, id,
  }, sendFetch, fetch,
}) {
  const handlerDelete = () => {
    axios.delete(`http://localhost:3000/product/${id}`)
      .then(() => sendFetch(!fetch));
  };
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
          <button className="decreaseQty">_</button>
          <p className="qtyValue">0</p>
          <button className="increaseQty">+</button>
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

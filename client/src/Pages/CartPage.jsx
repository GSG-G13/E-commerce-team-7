import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartDiv from '../Components/cartComponents/cartDiv';
import '../assets/styles';

export function CartPage() {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    axios.post('http://localhost:3000/get-all-product')
      .then(({ data: { rows } }) => {
        setCarts(rows);
      });
  }, []);
  return (
    <div className="cart-container">
      <h1 style={{ fontWeight: '300' }}>Cart</h1>
      <div className="cart-table">
        {carts && carts.map((cart) => <CartDiv key={cart.id} cart={cart} />)}

      </div>
    </div>
  );
}

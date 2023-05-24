import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartDiv from '../Components/cartComponents/cartDiv';
import '../assets/styles';

export function CartPage() {
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [fetch, sendFetch] = useState(false);

  useEffect(() => {
    axios.get('/api/get-all-product')
      .then(({ data: { rows } }) => {
        setCarts(rows);
      });
  }, [fetch]);

  return (
    <div className="cart-container">
      <h1 style={{ fontWeight: '300' }}>Cart</h1>
      <div className="cart-table">
        <div className="totalPrice">
          {carts.reduce((acc, curr) => acc + curr.price, 0)}
        </div>
        {carts && carts.map((cart) => <CartDiv sendFetch={sendFetch} fetch={fetch}  key={cart.id} cart={cart} />)}

      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartDiv from '../Components/cartComponents/cartDiv';
import '../assets/styles/layout.css'
import '../assets/styles/cart.css';
import '../assets/styles/cards.css';

export function CartPage() {
  const [carts, setCarts] = useState([]);
  const [fetch, sendFetch] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios.get('/api/get-all-product')
      .then(({ data: { rows } }) => {
        setCarts(rows);
      });
  }, [fetch]);

  useEffect(() => {
    let newTotalPrice = 0;

    carts.map((cartItem) => {
      newTotalPrice += cartItem.price * cartItem.count;
      setTotalPrice(newTotalPrice);
    })
  }, [carts]);

  // console.log(totalPrice); //! it wait loading to work.
  return (
    <div className="cart-container">
      <h1 style={{ fontWeight: '300' }}>Cart</h1>
      <div className="cart-table">
        <div className="totalPrice">
          {totalPrice}
        </div>
        {carts && carts.map((cart) => <CartDiv sendfetch1={sendFetch} fetch1={fetch} key={cart.id} cart={cart} />)}
      </div>
    </div>
  );
}

//  {carts.reduce((acc, curr) => acc + curr.price, 0)}

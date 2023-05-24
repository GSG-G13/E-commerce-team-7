import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartDiv from '../Components/cartComponents/cartDiv';
import '../assets/styles/layout.css'
import '../assets/styles/cart.css';
import '../assets/styles/cards.css';

export function CartPage() {
  const [carts, setCarts] = useState([]);
  const [fetch1, sendfetch1] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/api/get-all-product')
      .then(({ data: { rows } }) => {
        setCarts(rows);
      });
  }, [fetch1]);
  console.log(carts);

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
        {carts && carts.map((cart) => {
          return <CartDiv sendfetch1={sendfetch1} fetch1={fetch1} key={cart.id} cart={cart} />
        })}

      </div>
    </div>
  );
}

//  {carts.reduce((acc, curr) => acc + curr.price, 0)}

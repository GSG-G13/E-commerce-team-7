/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CartDiv from '../Components/cartComponents/cartDiv';
import '../assets/styles/layout.css';
import '../assets/styles/cart.css';
import '../assets/styles/cards.css';

export function CartPage() {
  const [carts, setCarts] = useState([]);
  const [fetch, sendFetch] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoader(true);
    axios.get('/api/get-all-product')
      .then(({ data: { rows } }) => {
        setCarts(rows);
        setLoader(false);
      });
  }, [fetch]);

  useEffect(() => {
    let newTotalPrice = 0;
    carts.map((cartItem) => {
      newTotalPrice += cartItem.price * cartItem.count;
      setTotalPrice(newTotalPrice);
    });
  }, [carts]);

  useEffect(() => {
    const token = document.cookie;
    if (!token.startsWith('token')) {
      navigate('/');
    }
  }, []);

  return (
    <div className="cart-container">
      <h1 style={{ fontWeight: '300' }}>Cart</h1>
      <div className="cart-table">
        <div className="totalPrice">
          {totalPrice}
        </div>
        {loader && (
        <div className="lds-ring">
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
        </div>
        )}
        {carts.length ? carts && carts.map((cart) =>
          <CartDiv sendfetch1={sendFetch} fetch1={fetch} key={cart.id} cart={cart} />)
          : !loader && <h3>you dont have products</h3>}
      </div>
    </div>
  );
}

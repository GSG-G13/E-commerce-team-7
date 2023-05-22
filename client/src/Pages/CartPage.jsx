import React, { useEffect, useState } from 'react';
import '../assets/styles';
import axios from 'axios';
import CartDiv from '../Components/cartComponents/cartDiv';

// eslint-disable-next-line import/prefer-default-export
export function CartPage() {
  // const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/get-all-product')
      .then(console.log)

    // fetch('')
    //   .then((response) => response.json())
    //   .then(console.log);
  }, []);
  return (
    <div className="cart-container">
      <h1 style={{ fontWeight: '300' }}>Cart</h1>
      <div className="cart-table">
        <CartDiv />

      </div>
    </div>
  );
}

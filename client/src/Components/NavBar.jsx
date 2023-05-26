/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import '../assets/styles/layout.css';
import { Link, useNavigate } from 'react-router-dom';

export function NavBar() {
  const navigate = useNavigate();
  const [Auth, setAuth] = useState(false);
  const [count, setCount] = useState(false);

  const logoutHandler = () => {
    fetch('/api/user/logout')
      .then((data) => data.json())
      .then(({ status }) => {
        if (status === 200) {
          navigate('/');
        }
      });
  };

  useEffect(() => {
    const token = document.cookie;
    if (token.startsWith('token')) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  });

  useEffect(() => {
    fetch('/api/get-all-product')
      .then((response) => response.json())
      .then(({ rows }) => {
        if (rows) {
          let a = 0;
          rows.forEach((row) => {
            a += row.count;
          });
          return a;
        }
      }).then((c) => setCount(c));
  });

  return (
    <div className="navbar-container">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <Link to="/" className="logo-name">NuvoShop</Link>
          </div>
          <nav>
            <ul id="MenuItems">
              <li><Link to="/">Home</Link></li>
              {Auth
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                ? (
                  <>
                    <li><i className="fa-solid fa-arrow-right-from-bracket" onClick={logoutHandler} /></li>
                    <Link className="cart-icon" to="cart">
                      <div className="amount-circle">{count}</div>
                      <i className="fa fa-shopping-cart" />
                    </Link>
                  </>
                )

                : (
                  <>
                    <li><Link to="signup">SignUp</Link></li>
                    <li><Link to="signin">SignIn</Link></li>
                  </>
                )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

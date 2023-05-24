/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import '../assets/styles/layout.css';
import { Link, useNavigate } from 'react-router-dom';

export function NavBar() {
  const navigate = useNavigate();
  const [Auth, setAuth] = useState(false);

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

  return (
    <div>
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
                ? <li><i className="fa-solid fa-arrow-right-from-bracket" onClick={logoutHandler} /></li>
                : (
                  <>
                    <li><Link to="signup">SignUp</Link></li>
                    <li><Link to="signin">SignIn</Link></li>
                  </>
                )}

              {/* <li><i className="fa-solid fa-arrow-right-from-bracket" onClick={logoutHandler} /></li> */}
            </ul>
          </nav>
          <Link to="cart"><i className="fa fa-shopping-cart" /></Link>
        </div>
      </div>
    </div>
  );
}

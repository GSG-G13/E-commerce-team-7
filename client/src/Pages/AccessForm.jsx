import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../assets/styles/login.css';

// eslint-disable-next-line react/prop-types
export function AccessForm({ endpoint }) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOkey, setIsOkey] = useState(false);
  const [loader, setLoader] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const accessHandler = () => {
    setLoader(true);
    fetch(`/api/user${pathname}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(
        endpoint === 'SignIn'
          ? { password, email }
          : { password, email, username },
      ),
    }).then((data) => data.json())
      .then(({ status }) => {
        if (status === 200) {
          navigate('/');
        } else {
          setLoader(false);
          setIsOkey(!isOkey);
        }
      });
  };

  useEffect(() => {
    const token = document.cookie;
    if (token.startsWith('token')) {
      navigate('/');
    }
  }, []);

  return (
    <div className="main-section">
      <div className="sidebar-image" />

      <div className="form-section">
        <h4>{endpoint === 'SignIn' ? 'Sign in' : 'Sign up'}</h4>

        <p>
          By continuing, you agree to our
          <a href="/">User Agreementand</a>
          and
          <a href="/">Privacy Policy</a>
        </p>

        <div className="form">
          {endpoint !== 'SignIn' ? (
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              name="username"
              id="name"
              placeholder="CHOOSE A USERNAME"
            />
          ) : null}

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="Email"
            placeholder="EMAIL"
            id="email"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            name="password"
            placeholder="PASSWORD"
            id="password"
          />

          { loader
            ? (
              <button className="load2" type="button">
                <span className="one"> </span>
                <span className="two"> </span>
                <span className="three"> </span>
              </button>
            )
            : (
              <button
                onClick={() => accessHandler(username, password, email)}
                id="register"
                type="button"
              >

                {endpoint === 'SignIn' ? 'Sign in' : 'Sign Up'}
              </button>
            )}
          { isOkey && <p className="error-massage">Invalid email or password!</p>}

          <p>
            Forgot your
            <a href="/">username</a>
            <a href="/">password?</a>
          </p>
          <p>
            {endpoint === 'SignIn' ? (
              <>
                <span> dont have account  </span>
                <Link to="/signup" className="link">SignUp</Link>
              </>
            ) : (
              <>
                <span>already have account </span>
                <Link to="/signin" className="link">Signin</Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

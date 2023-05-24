import '../assets/styles/layout.css';
import { Link, useNavigate } from 'react-router-dom';

export function NavBar() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    fetch(`/api/user/logout`)
      .then((data) => data.json())
      .then(({ status }) => {
        if (status === 200) {
          navigate('/')
        }
      });
  };

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
              <li><Link to="signup">SignUp</Link></li>
              <li><Link to="signin">SignIn</Link></li>
              <li><i className="fa-solid fa-arrow-right-from-bracket" onClick={logoutHandler} /></li>
            </ul>
          </nav>
          <Link to="cart"><i className="fa fa-shopping-cart" /></Link>
        </div>
      </div>
    </div>
  );
}

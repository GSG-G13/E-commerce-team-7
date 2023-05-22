import { useLocation } from 'react-router-dom';

export function AccessForm({ endpoint }) {
  return (
    <div className="main-section">

      <div className="sidebar-image" />

      <div className="form-section">

        <h4>{endpoint === 'SignIn' ? 'Sign in' : 'Sign up'}</h4>

        <p>

          By continuing, you agree to our

          <a href="#">User Agreementand</a>

          and

          <a href="#">Privacy Policy</a>

        </p>

        <form action="/register" method="POST">

          <input type="text" name="name" id="name" placeholder="CHOOSE A USERNAME" />

          <input type="text" name="email" placeholder="EMAIL" id="email" />

          <input type="text" name="password" placeholder="PASSWORD" id="password" />

          <button id="register">SIGN UP!</button>

          <p>

            Forgot your

            <a href="#">username</a>

            <a href="#">password?</a>

          </p>

          <p>

            New to our site?

            <a href="#">SIGN UP</a>

          </p>

        </form>

      </div>

    </div>
  );
}

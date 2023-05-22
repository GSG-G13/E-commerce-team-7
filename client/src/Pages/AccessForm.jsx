import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function AccessForm({ endpoint }) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { pathname } = useLocation();

 
  const accessHandler = async () => {
    const resp = await fetch(`http://127.0.0.1:3000/user${pathname}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(
        endpoint === "SignIn"
          ? { password, email }
          : { password, email, username }
      ),
    });
    
  };

  return (
    <div className="main-section">
      <div className="sidebar-image" />

      <div className="form-section">
        <h4>{endpoint === "SignIn" ? "Sign in" : "Sign up"}</h4>

        <p>
          By continuing, you agree to our
          <a href="#">User Agreementand</a>
          and
          <a href="#">Privacy Policy</a>
        </p>

        <div className="form">
          {endpoint !== "SignIn" ? (
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

          <button
            onClick={() => accessHandler(username, password, email)}
            id="register"
          >
            {endpoint === "SignIn" ? "Sign in" : "Sign Up"}
          </button>

          <p>
            Forgot your
            <a href="#">username</a>
            <a href="#">password?</a>
          </p>

          <p>
            New to our site?
            <a href="#">SIGN UP</a>
          </p>
        </div>
      </div>
    </div>
  );
}

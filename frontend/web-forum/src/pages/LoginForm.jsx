import React, { useState } from "react";
import LoginInputField from "../components/LoginInputField";
import ResetPassComp from "../components/ResetPassComp";
import '../style.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // ovde ide logika za login
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit} className="kutija">
        <h2>Login</h2>

        <LoginInputField
          type="text"
          placeholder="Korisničko ime"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <LoginInputField
          type="password"
          placeholder="Lozinka"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <ResetPassComp />

        <button type="submit">Uloguj se</button>

        <div className="registracija">
          <p>
            Nemate nalog?
            <a href="#" className="reg">
              {" "}
              Registrujte se!
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
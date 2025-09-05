import React, { useState, useEffect } from "react";
import LoginInputField from "../components/LoginInputField";
import ResetPassComp from "../components/ResetPassComp";
import "../style.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        alert("Login neuspešan!");
        return;
      }

      const data = await response.json();

      // snimanje tokena i username-a u localStorage
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("username", data.user.username);
      localStorage.setItem("email", data.user.email);

      alert("Login uspešan!");

      // redirect na početnu
      navigate("/");
    } catch (error) {
      console.error("Greška prilikom logina:", error);
      alert("Došlo je do greške pri loginu!");
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit} className="kutija">
        <h2>Login</h2>

        <LoginInputField
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
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
            <a href="/register" className="reg">
              Registrujte se!
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

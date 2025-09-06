import React, { useState } from "react";
import LoginInputField from "../components/LoginInputField";
import "../style.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert("Registracija neuspešna!\n" + JSON.stringify(errorData.errors));
        return;
      }

      const data = await response.json();

      alert("Registracija uspešna!");

      // odmah snimimo podatke i prebacimo na home
      localStorage.setItem("username", data.user.username);
      localStorage.setItem("email", data.user.email);

      navigate("/");
    } catch (error) {
      console.error("Greška prilikom registracije:", error);
      alert("Došlo je do greške pri registraciji!");
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit} className="kutija">
        <h2>Registracija</h2>

        <LoginInputField
          type="text"
          placeholder="Korisničko ime"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

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

        <button type="submit">Registruj se</button>

        <div className="registracija">
          <p>
            Već imate nalog?
            <a href="/login" className="reg">
              Ulogujte se!
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

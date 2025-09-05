import React, { useState } from "react";
import "../style.css";  

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Lozinke se ne poklapaju!");
      return;
    }

    console.log("Podaci za registraciju:", formData);
    
  };

  return (
    <div className="register-page">
      <div className="login-wrapper">
        <div className="kutija">
          <form onSubmit={handleSubmit}>
            <h2>Registracija</h2>

            <div className="polje">
              <input
                type="email"
                placeholder="E-mail"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="polje">
              <input
                type="text"
                placeholder="Korisničko ime"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="polje">
              <input
                type="password"
                placeholder="Lozinka"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="polje">
              <input
                type="password"
                placeholder="Ponovite lozinku"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Registruj se</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
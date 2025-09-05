import React, { useState } from "react";
import Header from '../components/Header';
import Feed from '../components/Feed';
import Navigation from "../components/Navigation";
import '../style.css';

const App = () => {
  const email = localStorage.getItem("email");
  const username = localStorage.getItem("username");
  const authToken = localStorage.getItem("authToken");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      alert("Nove lozinke se ne poklapaju!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify({
          current_password: currentPassword,
          new_password: newPassword,
          new_password_confirmation: confirmPassword
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Lozinka uspešno promenjena!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        alert(data.message || "Greška pri promeni lozinke!");
      }
    } catch (error) {
      console.error("Greška:", error);
      alert("Došlo je do greške na serveru.");
    }
  };

  return (
    <div className="pozadina">
      <Header />

      <div className="kontent">
        <Navigation />

        <div className="feed">
          <div className="podesavanja">
            <h2>Podešavanja</h2>

            <div className="email-podesavanja">
              <p className="stavke">Email: </p>
              <p>{email}</p>
            </div>

            <div className="username-podesavanja">
              <p className="stavke">Korisničko ime: </p>
              <p>{username}</p>
            </div>
            <div>
              <div className="promena_lozinke">
                <label htmlFor="trenutna-loz">Unesi trenutnu lozinku: </label>
                <input
                  type="password"
                  id="trenutna-loz"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
                
              <div className="promena_lozinke">
                <label htmlFor="nova-loz">Unesi novu lozinku: </label>
                <input
                  type="password"
                  id="nova-loz"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
                
              <div className="promena_lozinke">
                <label htmlFor="potvrda-loz">Potvrdite novu lozinku: </label>
                <input
                  type="password"
                  id="potvrda-loz"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
                

            </div>
            

            <button onClick={handlePasswordChange}>Promeni lozinku</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
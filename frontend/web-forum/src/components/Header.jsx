import React from "react";

const Header = () => {
  var loginInfo;
  
  if (localStorage.getItem("authToken") != null) {
    loginInfo = "Korisnik: "+localStorage.getItem("username");
  } else {
    loginInfo = "";
  }

  return (
    <header className="heder">
      <p id="header-login-info">{loginInfo}</p>
      <h1 className="imesajta">kerfafl.rs</h1>
    </header>
  );
};

export default Header;

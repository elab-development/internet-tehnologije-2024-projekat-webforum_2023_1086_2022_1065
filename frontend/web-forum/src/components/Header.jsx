import React from "react";

const Header = () => {
  var loginInfo;
  
  if (localStorage.getItem("authToken") != null) {
    loginInfo = "ulogovan korisnik: "+localStorage.getItem("username");
  } else {
    loginInfo = "";
  }

  return (
    <header className="heder">
      <p id="headerLoginInfo">{loginInfo}</p>
      <h1 className="imesajta">kerfafl.rs</h1>
    </header>
  );
};

export default Header;

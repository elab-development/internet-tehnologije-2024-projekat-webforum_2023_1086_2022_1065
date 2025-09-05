import React from "react";

const Navigation = () => {
  
  var loginNavString;
  var userLogonRoute;

  if (localStorage.getItem("authToken") != null) {
    loginNavString = "Logout";
    userLogonRoute = "/logout";
    console.log("Token postoji");
  } else {
    loginNavString = "Login";
    userLogonRoute = "/login";
    console.log("Token NIJE setovan");
  }
  
  return (
    <nav className="navigacija">
      <ul>
        <li><a href="/" className="meni">Novo</a></li>
        <li><a href="/filter" className="meni">Kategorije</a></li>
        <li><a href={userLogonRoute} className="meni">{loginNavString}</a></li>
        {localStorage.getItem("authToken") && (
          <li>
            <a href="/settings" className="meni">Settings</a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

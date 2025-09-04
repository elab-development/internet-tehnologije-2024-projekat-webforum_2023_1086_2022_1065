import React from "react";
import Filters from "./Filters";

const NavFilters = () => {

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
    <div className="side">
      <nav className="filter-navigacija">
      <ul>
        <li><a href="/" className="meni">Novo</a></li>
        <li><a href="/filter" className="meni">Kategorije</a></li>
        <li><a href={userLogonRoute} className="meni">{loginNavString}</a></li>
      </ul>
    </nav>
    <Filters />
    </div>
    
    
  );
};

export default NavFilters;

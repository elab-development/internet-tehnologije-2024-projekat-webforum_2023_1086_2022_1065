import React from "react";
import Filters from "./Filters";

const NavFilters = () => {
  return (
    <div className="side">
      <nav className="filter-navigacija">
      <ul>
        <li><a href="/" className="meni">Novo</a></li>
        <li><a href="/filter" className="meni">Kategorije</a></li>
        <li><a href="/login" className="meni">Login</a></li>
      </ul>
    </nav>
    <Filters />
    </div>
    
    
  );
};

export default NavFilters;

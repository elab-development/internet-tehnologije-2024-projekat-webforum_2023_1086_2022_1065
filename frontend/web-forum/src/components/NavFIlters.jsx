import React from "react";
import Filters from "./Filters";

const NavFilters = () => {
  return (
    <div className="kontent">
      <nav className="novo-navigacija">
      <ul>
        <li><a href="html folder/novo.html" className="meni">Novo</a></li>
        <li><a href="html folder/kategorije.html" className="meni">Kategorije</a></li>
        <li><a href="#" className="meni">Odjava</a></li>
      </ul>
    </nav>
    <Filters />
    </div>
    
    
  );
};

export default NavFilters;

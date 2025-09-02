import React from "react";

const Navigation = () => {
  return (
    <nav className="dugmenav">
      <ul>
        <li><a href="pocetna.html" className="meni">Početna</a></li>
        <li><a href="html folder/novo.html" className="meni">Novo</a></li>
        <li><a href="html folder/kategorije.html" className="meni">Kategorije</a></li>
        <li><a href="html folder/profil.html" className="meni">Profil</a></li>
        <li><a href="html folder/podesavanja.html" className="meni">Podešavanja</a></li>
        <li><a href="#" className="meni">Novi thread</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;

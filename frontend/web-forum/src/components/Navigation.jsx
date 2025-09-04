import React from "react";

const Navigation = () => {
  return (
    <nav className="navigacija">
      <ul>
        <li><a href="/" className="meni">Novo</a></li>
        <li><a href="/filter" className="meni">Kategorije</a></li>
        <li><a href="/login" className="meni">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;

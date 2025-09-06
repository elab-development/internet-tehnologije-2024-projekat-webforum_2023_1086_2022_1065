import React, { useState } from "react";
import Header from '../components/Header';
import Feed from '../components/Feed';
//import Navigation from "../components/Navigation";
import NavFilters from "../components/NavFIlters";
import '../style.css';

const App = () => {
  const [filters, setFilters] = useState({
    category: "1",
    searchText: "",
    isOpen: false,
  });

  return (
    <div className="pozadina">
      <Header />
      <div className="kontent">
        <NavFilters onSearch={setFilters} />
        <Feed brojThreadova={5} filters={filters} />
      </div>
    </div>
  );
};

export default App;

import React from "react";
import Header from '../components/Header';
import Feed from '../components/Feed';
//import Navigation from "../components/Navigation";
import NavFilters from "../components/NavFIlters";
import '../style.css';

const App = () => {
  return (
    <div className="pozadina">
      
      <Header />

      <div className="kontent">

        <NavFilters />

        <Feed />

      </div>

    </div>
  );
};

export default App;
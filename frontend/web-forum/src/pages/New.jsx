import React from "react";
import Header from '../components/Header';
import Feed from '../components/Feed';
import Navigation from "../components/Navigation";

const App = () => {
  return (
    <div className="pozadina">
      
      <Header />

      <div className="kontent">

        <Navigation />

        <Feed />

      </div>

    </div>
  );
};

export default App;

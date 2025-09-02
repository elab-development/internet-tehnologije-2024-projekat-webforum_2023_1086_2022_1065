import React from "react";
import Header from '../components/Header';
import Navbar from '../components/Navigation';
import Feed from '../components/Feed';

const App = () => {
  return (
    <div className="pozadina">
      
      <Header />

      <div className="kontent">

        <Navbar />

        <Feed />

      </div>

    </div>
  );
};

export default App;

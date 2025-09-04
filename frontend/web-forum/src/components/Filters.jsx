import React, { useState } from "react";

const Filters = () => {
  const [category, setCategory] = useState("1");
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Pretraga:", { category, searchText, isOpen });
  };

  return (
    <div className="kategorije">
      <p>Kategorije i pretraga</p>

      <select
        name="odabir"
        id="odabir"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="1">Društvo</option>
        <option value="2">Zabava</option>
        <option value="3">Tehnologija</option>
        <option value="4">Obrazovanje</option>
        <option value="5">Igrice</option>
      </select>

      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          className="pretraga"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">Pretraži</button>
      </form>

      <div className="cekboks">
        <input
          type="checkbox"
          name="open"
          id="open"
          checked={isOpen}
          onChange={(e) => setIsOpen(e.target.checked)}
        />
        <label htmlFor="open">Thread open</label>
      </div>
    </div>
  );
};

export default Filters;

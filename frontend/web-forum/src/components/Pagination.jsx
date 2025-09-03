import React, { useState } from "react";

const Pagination = ({ totalPages = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="menjanje">
      <button onClick={goPrev} disabled={currentPage === 1}>
        &lt;
      </button>
      <p>{currentPage}</p>
      <button onClick={goNext} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
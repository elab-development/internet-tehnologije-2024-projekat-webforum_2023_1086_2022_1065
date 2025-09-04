import React from "react";

const Pagination = ({ currentPage, totalCount, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  const goPrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
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

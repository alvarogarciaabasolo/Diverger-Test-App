import React from 'react';

export const Pagination = ({ setPageNumber, pageNumber, totalPages }) => {
  
  const handlePrevious = () => {
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div>
      <button onClick={handlePrevious} disabled={pageNumber === 1}>
        Previous
      </button>
      <button onClick={handleNext} disabled={totalPages === pageNumber}>
        Next
      </button>
    </div>
  );
};

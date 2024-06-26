import React from 'react';
import {
  PaginationContainer,
  PaginationButton,
} from './style/Pagination.styled.js';

export const Pagination = ({ setPageNumber, pageNumber, totalPages }) => {
  const handlePrevious = () => {
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <PaginationContainer>
      {pageNumber > 1 && (
        <PaginationButton onClick={handlePrevious}>Previous</PaginationButton>
      )}
      {pageNumber < totalPages && (
        <PaginationButton onClick={handleNext}>Next</PaginationButton>
      )}
    </PaginationContainer>
  );
};

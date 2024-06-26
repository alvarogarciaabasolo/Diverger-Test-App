import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pagination } from '../Pagination';

describe('Pagination', () => {
  it('renders Next button when not on the last page', () => {
    const setPageNumber = jest.fn();
    render(<Pagination setPageNumber={setPageNumber} pageNumber={1} totalPages={5} />);

    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.queryByText('Previous')).not.toBeInTheDocument();
  });

  it('renders Previous button when not on the first page', () => {
    const setPageNumber = jest.fn();
    render(<Pagination setPageNumber={setPageNumber} pageNumber={2} totalPages={5} />);

    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('does not render Next button on the last page', () => {
    const setPageNumber = jest.fn();
    render(<Pagination setPageNumber={setPageNumber} pageNumber={5} totalPages={5} />);

    expect(screen.queryByText('Next')).not.toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
  });

  it('handles Previous button click', () => {
    const setPageNumber = jest.fn();
    render(<Pagination setPageNumber={setPageNumber} pageNumber={2} totalPages={5} />);

    fireEvent.click(screen.getByText('Previous'));

    expect(setPageNumber).toHaveBeenCalledWith(1);
  });

  it('handles Next button click', () => {
    const setPageNumber = jest.fn();
    render(<Pagination setPageNumber={setPageNumber} pageNumber={2} totalPages={5} />);

    fireEvent.click(screen.getByText('Next'));

    expect(setPageNumber).toHaveBeenCalledWith(3);
  });
});

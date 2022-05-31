import React, { useCallback } from 'react';
import { Circle, PaginationContainer } from './styles';
import { PaginationProps } from './types';

const Pagination = ({ onChange, pages }: PaginationProps) => {
  return (
    <PaginationContainer>
      {new Array(pages).fill(null).map((_page, index) => (
        <Circle onClick={() => onChange(index + 1)}>{index + 1}</Circle>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;

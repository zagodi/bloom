import React from 'react';
import GenresListItem from './GensresListItem';
import { Container } from './styles';
import { GenreListProps } from './types';

const GenresList = ({ genres }: GenreListProps) => {
  return (
    <Container>
      {genres.map((genre) => (
        <GenresListItem genre={genre} />
      ))}
    </Container>
  );
};

export default GenresList;

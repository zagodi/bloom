import React from 'react';

import { useGenresList } from 'hooks/useGenresList';
import GenresList from 'components/GenresList';
import { Container } from './styles';

function Genres() {
  const { data, isFetching } = useGenresList();

  return <Container>{data && <GenresList genres={data.results} />}</Container>;
}

export default Genres;

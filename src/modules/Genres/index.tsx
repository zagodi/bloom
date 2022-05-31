import React, { useMemo, useState } from 'react';

import { useGenresList } from 'hooks/useGenresList';

import GenresList from 'components/GenresList';
import Pagination from 'components/Pagination';

import { Container } from './styles';
import { useSearch } from 'hooks/useSearch';
import { Genre } from 'services/genres/types';

function Genres() {
  const [currPage, setCurrPage] = useState<number>(1);
  const { genresList } = useSearch();
  const { genres, isFetching, pages } = useGenresList({ currPage });

  console.log({ genresList });

  const list = useMemo<Genre[]>(
    () => (genresList ? genresList : genres),
    [genresList, genres],
  );

  return (
    <Container>
      {isFetching && <span>Carregando...</span>}
      {list && <GenresList genres={list} />}
      <Pagination pages={pages} onChange={setCurrPage} />
    </Container>
  );
}

export default Genres;

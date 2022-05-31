import { Resources } from 'entitites/Response/Resources';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createUseBooksKey } from 'services/books';
import { Book, BooksResponse } from 'services/books/types';
import { createUseGenresKey } from 'services/genres';
import { Genre, GenresResponse } from 'services/genres/types';
import { queryClient } from 'services/queryClient';
import useList from 'stores/useList';

export const useSearch = () => {
  const [genresList, setGenresList] = useState<Genre[] | undefined>();
  const { genreName } = useParams();
  const { setList } = useList();
  let booksList: Book[] | null = null;

  const searchBooks = useCallback((term: string) => {
    const identifier = createUseBooksKey(genreName ?? ``);
    const cachedBooksResponse = queryClient.getQueryData<BooksResponse>(identifier);

    if (cachedBooksResponse?.results) {
      const books = cachedBooksResponse.results;
      booksList = books.filter((book) => book.display_name.includes(term));
      setList(booksList);
    }
  }, []);

  const searchGenres = useCallback((term: string): void => {
    const identifier = createUseGenresKey();
    const cachedGenresResponse = queryClient.getQueryData<GenresResponse>(identifier);

    if (cachedGenresResponse?.results) {
      const genres = cachedGenresResponse.results;
      const filtered = genres.filter((genre: Genre) => genre.list_name.includes(term));
      console.log({ filtered, term });
      setGenresList(filtered);
    }
  }, []);

  return { searchBooks, searchGenres, booksList, genresList };
};

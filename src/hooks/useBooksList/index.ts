import { useBooks } from 'services/books';
import { UseBooksListParams } from './types';

export const useBooksList = ({ listName }: UseBooksListParams) => {
  const { data, isFetching } = useBooks(listName);

  return { data, isFetching };
};

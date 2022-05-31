import { useBooks } from 'services/books';
import { UseBooksListParams } from './types';

export const useBooksList = ({ currPage, take = 5, listName }: UseBooksListParams) => {
  const { data, isFetching } = useBooks(listName);

  if (data) {
    const { num_results: total, results } = data;
    const currIndex = currPage - 1; // Get the current index in the array
    const pages = total ? Math.ceil(total / take) : 0; // If none, return 0 pages
    const skip = currIndex * take; // Indicates de index where it should start to get the items
    const endIndex = skip + take;
    const books = results.slice(skip, endIndex);

    return { books, isFetching, pages };
  }

  return { books: [], isFetching, pages: 0 };
};

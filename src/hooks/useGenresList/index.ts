import { useGenres } from 'services/genres';
import { UseGenresListProps } from './types';

export const useGenresList = ({ currPage, take = 5 }: UseGenresListProps) => {
  const { data, isFetching } = useGenres();

  if (data) {
    const { num_results: total, results } = data;
    const currIndex = currPage - 1; // Get the current index in the array
    const pages = total ? Math.ceil(total / take) : 0; // If none, return 0 pages
    const skip = currIndex * take; // Indicates de index where it should start to get the items
    const endIndex = skip + take;
    const genres = results.slice(skip, endIndex);

    return { genres, isFetching, pages };
  }

  return { genres: [], isFetching, pages: 0 };
};

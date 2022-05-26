import { useGenres } from 'services/genres';

export const useGenresList = () => {
  const { data, isFetching } = useGenres();

  return { data, isFetching };
};

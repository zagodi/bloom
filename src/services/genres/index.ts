import { QueryKey, useQuery } from 'react-query';
import { api } from 'api';

import { GenresResponse } from './types';

export const createUseGenresKey = (): QueryKey => [`useGenres`];

export const useGenres = () =>
  useQuery<GenresResponse>(createUseGenresKey(), () =>
    api.get(`books/v3/lists/names.json`).then((res) => res.data),
  );

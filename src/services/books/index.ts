import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
import { api } from 'api';
import { RequestError } from 'entitites/Response';
import { BooksResponse } from './types';

export const createUseBooksKey = (listName?: string): QueryKey => [
  `useBooksKey`,
  listName,
];

export const useBooks = (
  listName?: string,
  options?: UseQueryOptions<BooksResponse, RequestError>,
) => {
  return useQuery<BooksResponse, RequestError>(
    createUseBooksKey(),
    () =>
      api
        .get<BooksResponse>(`books/v3/lists.json`, {
          params: {
            list: listName,
          },
        })
        .then((res) => res.data),
    options,
  );
};

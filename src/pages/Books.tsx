import React from 'react';
import { useParams } from 'react-router-dom';
import { useBooksList } from 'hooks/useBooksList';
import { RoutesParams } from './types';
import { Book } from 'services/books/types';

function Books() {
  const { genreName } = useParams<RoutesParams>();
  const { data } = useBooksList({ listName: genreName });

  return (
    <div>
      {data?.results.map((item: Book) => {
        const book = item.book_details[0];
        return <p key={book.title}>Livro: {book.title}</p>;
      })}
    </div>
  );
}

export default Books;

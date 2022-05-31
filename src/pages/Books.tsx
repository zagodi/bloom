import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBooksList } from 'hooks/useBooksList';
import { RoutesParams } from './types';
import { Book } from 'services/books/types';
import Pagination from 'components/Pagination';

function Books() {
  const [currPage, setCurrPage] = useState<number>(1);
  const { genreName } = useParams<RoutesParams>();
  const { books, isFetching, pages } = useBooksList({ listName: genreName, currPage });

  return (
    <div>
      {isFetching && <span>Carregando...</span>}
      {books.map((item: Book) => {
        const book = item.book_details[0];
        return <p key={book.title}>{book.title}</p>;
      })}
      <Pagination pages={pages} onChange={setCurrPage} />
    </div>
  );
}

export default Books;

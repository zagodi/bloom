import React from 'react';
import { Link } from 'react-router-dom';
import { Card, InfosContainer, PublishedsContainer } from './styles';
import { GenreListItemsProps } from './types';

const GenresListItem = ({ genre }: GenreListItemsProps) => {
  return (
    <Card>
      <InfosContainer>
        <span>
          <Link key={genre.display_name} to={`/genres/${genre.list_name_encoded}`}>
            {genre.display_name}
          </Link>
        </span>

        <span>{genre.updated}</span>
      </InfosContainer>

      <PublishedsContainer>
        <span>{genre.newest_published_date}</span>

        <span>{genre.oldest_published_date}</span>
      </PublishedsContainer>
    </Card>
  );
};

export default GenresListItem;

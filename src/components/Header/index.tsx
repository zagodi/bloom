import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import {
  Container,
  InputContainer,
  Logo,
  MainHeader,
  OptionsContainer,
  StyledInput,
  SubHeader,
  Title,
} from './styles';

import { HeaderProps } from './types';

import bloomLogo from 'assets/Bloom-Books.png';
import star from 'assets/star.svg';
import squaresIcon from 'assets/Squares.svg';
import linesIcon from 'assets/Lines.svg';
import { useSearch } from 'hooks/useSearch';

function Header({ currentList }: HeaderProps) {
  const { genreName } = useParams();
  const { searchBooks, searchGenres } = useSearch();
  const onChangeText = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    if (genreName) {
      searchBooks(term);
    } else {
      searchGenres(term);
    }
  }, []);

  return (
    <Container>
      <MainHeader>
        <Logo src={bloomLogo} alt="bloom logo" />

        <InputContainer>
          <StyledInput type="text" onChange={onChangeText} />
        </InputContainer>

        <img src={star} alt="favorite" />
      </MainHeader>
      <SubHeader>
        <Title>{currentList ? currentList : 'Gêneros'}</Title>
        <OptionsContainer>
          <div>
            <span>Exibir</span>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
          <span>por vez</span>

          <img src={linesIcon} alt="show columns" />
          <img src={squaresIcon} alt="show cards" />
        </OptionsContainer>
      </SubHeader>
    </Container>
  );
}

export default Header;

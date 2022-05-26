import React from 'react';

import bloomLogo from 'assets/Bloom-Books.png';
import star from 'assets/star.svg';
import { Container, MainHeader, SubHeader, Title } from './styles';

import squaresIcon from 'assets/Squares.svg';
import linesIcon from 'assets/Lines.svg';

function Header({ currentList, setCurrentList }) {
  return (
    <Container>
      <MainHeader>
        <img src={bloomLogo} alt="bloom logo" width="50px" height="50px" />

        <div>
          <input type="text" />
        </div>

        <img src={star} alt="favorite" />
      </MainHeader>
      <SubHeader>
        <Title>{currentList ? currentList : 'Gêneros'}</Title>
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
      </SubHeader>
    </Container>
  );
}

export default Header;

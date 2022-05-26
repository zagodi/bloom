import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MainHeader = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  height: 60px;
`;

export const SubHeader = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.neutro.n1};
  display: flex;
  height: 60px;
`;

export const Title = styled.h4``;

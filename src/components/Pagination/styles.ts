import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.neutro.n5};
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

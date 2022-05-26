import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.text.neutro.n6};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid green;
`;

export const Main = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid red;
  max-width: 1080px;
`;

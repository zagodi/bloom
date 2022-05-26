import Header from 'components/Header';
import React, { useState } from 'react';

import { AppRoutes } from 'routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'styles';
import { Container, Main } from 'styles/global';

function App() {
  const [currentList, setCurrentList] = useState('');
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header currentList={currentList} setCurrentList={setCurrentList} />
      <Container>
        <Main>
          <AppRoutes />
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;

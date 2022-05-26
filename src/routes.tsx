import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Genres from 'pages/Genres';
import Books from 'pages/Books';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Genres />} />
        <Route path="genres" element={<Genres />} />
        <Route path="genres/:genreName" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

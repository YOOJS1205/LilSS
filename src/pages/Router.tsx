import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Account from './Account';
import Home from './Home';
import Price from './Price';
import Send from './Send';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
        <Route path="/account" element={<Account />} />
        <Route path="/send" element={<Send />} />
      </Routes>
    </BrowserRouter>
  );
}

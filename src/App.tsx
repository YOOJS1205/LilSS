import React from 'react';
import { RecoilRoot } from 'recoil';

import Router from './pages/Router';

export default function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

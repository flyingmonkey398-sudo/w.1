import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TokenMarketplace from './components/TokenMarketplace';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<TokenMarketplace />} />
    </Routes>
  );
}

export default App;
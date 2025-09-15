import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TokenMarketplace from './components/TokenMarketplace';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<TokenMarketplace />} />
      </Routes>
    </Router>
  );
}

export default App;

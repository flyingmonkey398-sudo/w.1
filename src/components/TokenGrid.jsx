import React from 'react';
import TokenCard from './TokenCard';

const TokenGrid = ({ tokens = [] }) => {
  // Create a grid of 30 tokens (5 rows × 6 columns)
  const gridTokens = Array.from({ length: 30 }, (_, index) => {
    const token = tokens[index];
    if (token) return token;
    return { type: 'empty', id: index };
  });

  return (
    <div className="token-grid">
      {gridTokens.map((token, index) => (
        <TokenCard
          key={token.id || index}
          type={token.type}
          pattern={token.pattern}
          sold={token.sold}
          image={token.image}
        />
      ))}
    </div>
  );
};

export default TokenGrid;

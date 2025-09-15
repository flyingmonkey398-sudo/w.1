import React from 'react';

const TokenCard = ({ type = 'empty', pattern, sold = false, image }) => {
  const getTokenClass = () => {
    if (type === 'pattern') return 'token-circle token-pattern';
    if (type === 'image' && image) return 'token-circle';
    return 'token-circle token-empty';
  };

  return (
    <div className="token-item">
      <div className={getTokenClass()}>
        {type === 'image' && image && (
          <img 
            src={image} 
            alt="Token" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
        {sold && <div className="token-sold-overlay">Sold</div>}
      </div>
    </div>
  );
};

export default TokenCard;

import React from 'react';
import { WalletButton, ShareButton, MenuButton, MarketplaceBar, SocialIcons } from './InteractiveElements';

const CollectionView = ({ collections = [] }) => {
  const defaultCollections = [
    {
      id: 1,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/a375e38b9fee8be32222c5e13773fcf62a0e9a53?width=686',
      alt: 'Collection Item 1'
    },
    {
      id: 2,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/ddd8ecaa82fae65df4ab909e5c3214c80468cc42?width=694',
      alt: 'Collection Item 2'
    }
  ];

  const displayCollections = collections.length > 0 ? collections : defaultCollections;

  return (
    <div className="collection-container">
      {displayCollections.map((collection, index) => (
        <div key={collection.id} className="collection-item">
          <img 
            src={collection.image} 
            alt={collection.alt}
            className="collection-image"
          />
          {index === 1 && (
            <div className="collection-actions">
              <WalletButton
                onClick={() => console.log('Wallet clicked')}
              />

              <ShareButton
                onClick={() => console.log('Share clicked')}
              />

              <MenuButton
                onClick={() => console.log('Menu clicked')}
              />

              <MarketplaceBar
                onClick={() => console.log('Marketplace clicked')}
              />

              <SocialIcons
                onInstagramClick={() => window.open('https://instagram.com', '_blank')}
                onFacebookClick={() => window.open('https://facebook.com', '_blank')}
              />

              <div className="create-icon-container">
                <svg className="create-question" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.02405 0.5C0.424048 0.1 -0.142621 3.00001 0.0240453 5.00001H1.19063C1.69063 1.50001 3.19063 2.00001 5.19063 2.00001C6.69063 2.00001 7.19063 3.50001 6.69063 5.00001C6.29063 6.20001 3.8573 8.50001 2.69063 9.50001V13.5H4.52396V9.50001C5.02396 9.00001 7.52396 8.00001 8.52396 4.50001C8.02405 1 6.69063 1 6.02405 0.5Z" fill="currentColor"/>
                </svg>
                <div className="create-dot"></div>
                <div className="create-plus-h"></div>
                <div className="create-plus-v"></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CollectionView;

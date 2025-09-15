import React, { useState } from 'react';
import MobileNavigation from './MobileNavigation';
import PlayButton from './PlayButton';
import TokenGrid from './TokenGrid';
import CollectionView from './CollectionView';

function TokenMarketplace() {
  const [activeTab, setActiveTab] = useState('tokens');

  // Sample token data matching the design
  const sampleTokens = [
    { id: 1, type: 'pattern', pattern: 'checkerboard' },
    { id: 2, type: 'pattern', pattern: 'checkerboard', sold: true },
    { id: 3, type: 'empty' },
    { id: 4, type: 'empty' },
    { id: 5, type: 'empty' },
    { id: 6, type: 'empty' }
  ];

  const sampleCollections = [
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

  return (
    <div className="container">
      <MobileNavigation />
      <PlayButton />
      
      <main className="main-content">
        <div className="tabs-container">
          <div>
            <a 
              href="#" 
              className={`tab ${activeTab === 'tokens' ? 'active' : 'inactive'}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('tokens');
              }}
            >
              My Tokens
            </a>
            {activeTab === 'tokens' && (
              <div className="tab-subtitle">
                (For entering Metaverse<br />events)
              </div>
            )}
          </div>
          
          <div>
            <a 
              href="#" 
              className={`tab ${activeTab === 'collection' ? 'active' : 'inactive'}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('collection');
              }}
            >
              My Collection
            </a>
          </div>
        </div>

        {activeTab === 'tokens' && <TokenGrid tokens={sampleTokens} />}
        {activeTab === 'collection' && <CollectionView collections={sampleCollections} />}
      </main>
    </div>
  );
}

export default TokenMarketplace;

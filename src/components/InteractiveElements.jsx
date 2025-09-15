import React, { useState } from 'react';

export const WalletButton = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="wallet-icon-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ 
        cursor: 'pointer', 
        opacity: isHovered ? 0.8 : 1,
        transition: 'opacity 0.2s ease'
      }}
    >
      <svg className="wallet-icon" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.87743 5.69285C0.666184 5.69285 0.121124 6.78297 0 7.32803V20.5911C0.436048 24.0795 3.3713 25.3554 4.78441 25.5572H24.7699C28.113 24.7821 29.2314 21.9235 29.3727 20.5911C29.4534 18.1687 29.5665 12.6696 29.3727 10.0533C29.1789 7.43704 26.2234 6.05622 24.7699 5.69285C24.7699 1.57462 21.0151 0.181687 19.1377 0L1.87743 5.69285ZM19.1377 1.15068C22.626 1.39293 23.6193 4.27973 23.6798 5.69285H4.78441L19.1377 1.15068ZM1.39293 9.38714V7.32803C1.33237 7.10596 1.45349 6.66184 2.42249 6.66184H24.7699C25.7389 6.96465 27.7738 7.93365 28.1614 9.38714H1.39293ZM28.1614 10.8406H1.39293V20.5911C1.39293 23.3528 4.01729 24.3258 5.32947 24.4671H24.7699C27.4831 23.595 28.1614 21.5198 28.1614 20.5911V10.8406Z" fill="currentColor"/>
      </svg>
      <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.67986 6.19533C5.38568 6.19533 6.76853 4.81248 6.76853 3.10665C6.76853 1.40083 5.38568 0.0179825 3.67986 0.0179825C1.97403 0.0179825 0.591187 1.40083 0.591187 3.10665C0.591187 4.81248 1.97403 6.19533 3.67986 6.19533ZM3.67996 4.74183C4.58304 4.74183 5.31514 4.00974 5.31514 3.10665C5.31514 2.20357 4.58304 1.47147 3.67996 1.47147C2.77687 1.47147 2.04478 2.20357 2.04478 3.10665C2.04478 4.00974 2.77687 4.74183 3.67996 4.74183Z" fill="currentColor"/>
      </svg>
    </div>
  );
};

export const ShareButton = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg 
      className="share-icon" 
      viewBox="0 0 38 38" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ 
        cursor: 'pointer', 
        opacity: isHovered ? 0.8 : 1,
        transition: 'opacity 0.2s ease'
      }}
    >
      <path d="M32.4583 5.54167L5.54163 14.25L15.8333 19L26.9166 11.0833L19 22.1667L23.75 32.4583L32.4583 5.54167Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export const MenuButton = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="menu-dots"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ 
        cursor: 'pointer', 
        opacity: isHovered ? 0.8 : 1,
        transition: 'opacity 0.2s ease'
      }}
    >
      <div className="menu-dot"></div>
      <div className="menu-dot"></div>
      <div className="menu-dot"></div>
    </div>
  );
};

export const MarketplaceBar = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="marketplace-bar"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ 
        cursor: 'pointer', 
        opacity: isHovered ? 0.9 : 1,
        transition: 'opacity 0.2s ease'
      }}
    >
      <div className="marketplace-text">Sell to marketplace</div>
    </div>
  );
};

export const SocialIcons = ({ onInstagramClick, onFacebookClick }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="social-icons">
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/ceb57c5d95093c914df83672bad696116e2bb98c?width=66" 
        alt="Instagram" 
        className="social-icon"
        onMouseEnter={() => setHoveredIcon('instagram')}
        onMouseLeave={() => setHoveredIcon(null)}
        onClick={onInstagramClick}
        style={{ 
          cursor: 'pointer', 
          opacity: hoveredIcon === 'instagram' ? 0.8 : 1,
          transition: 'opacity 0.2s ease'
        }}
      />
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/acb885b490e0744aa550e2430da280d2c26c0eb7?width=52" 
        alt="Facebook" 
        className="social-icon"
        onMouseEnter={() => setHoveredIcon('facebook')}
        onMouseLeave={() => setHoveredIcon(null)}
        onClick={onFacebookClick}
        style={{ 
          cursor: 'pointer', 
          opacity: hoveredIcon === 'facebook' ? 0.8 : 1,
          transition: 'opacity 0.2s ease'
        }}
      />
    </div>
  );
};

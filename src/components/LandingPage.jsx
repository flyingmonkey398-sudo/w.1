import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const features = [
    {
      icon: "🎨",
      title: "Create & Collect",
      description: "Mint your own tokens and build a unique digital collection for metaverse experiences."
    },
    {
      icon: "💰",
      title: "Trade & Earn",
      description: "Buy, sell, and trade tokens in our secure marketplace with transparent pricing."
    },
    {
      icon: "🌐",
      title: "Metaverse Ready",
      description: "Use your tokens to access exclusive events and experiences in virtual worlds."
    },
    {
      icon: "🔐",
      title: "Secure Wallet",
      description: "Keep your digital assets safe with our integrated wallet and smart contract technology."
    }
  ];

  return (
    <div className="landing-page">
      <div className="landing-hero">
        <h1 className="landing-title">
          Your Gateway to the Digital Future
        </h1>
        <p className="landing-subtitle">
          Create, collect, and trade unique tokens for metaverse experiences. 
          Join the next generation of digital ownership.
        </p>
        <Link to="/app" className="landing-cta">
          Enter Marketplace
        </Link>
      </div>

      <div className="landing-features">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">
              <span style={{ fontSize: '48px' }}>{feature.icon}</span>
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;

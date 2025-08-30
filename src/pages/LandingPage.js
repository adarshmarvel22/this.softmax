import React, { useEffect, useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  
  const phrases = [
    'Creating "a beautiful sunset"',
    'Generating "a futuristic city"',
    'Designing "a cute puppy"',
    'Rendering "an abstract pattern"'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase(prev => (prev + 1) % phrases.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="landing-page">

      <section className="hero">
        <div className="container">
          <h1>Transform Text into Stunning Visuals</h1>
          <p>This.SoftMax is an AI-powered platform that converts your textual descriptions into high-quality, realistic images with just a few clicks.</p>
          <div className="hero-buttons">
            <button className="cta-button">Start Creating Now</button>
            <button className="secondary-button">Watch Demo</button>
          </div>
          
          {/* DNA Animation */}
          <div className="dna-container">
            <div className="dna">
              <div className="dna-strand" style={{animationDelay: '0s'}}></div>
              <div className="dna-strand" style={{animationDelay: '1s'}}></div>
              <div className="dna-strand" style={{animationDelay: '2s'}}></div>
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="dna-node" 
                  style={{
                    top: `${20 + i * 16}px`,
                    animationDelay: `${i * 0.3}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Computer Setup */}
          <div className="computer-setup">
            <div className="monitor">
              <div className="monitor-screen">
                <div className="screen-content">
                  <i className="fas fa-magic"></i>
                  <h3>{phrases[currentPhrase]}</h3>
                </div>
              </div>
            </div>
            <div className="keyboard"></div>
            <div className="mouse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Powerful Features</h2>
            <p>Discover how This.SoftMax can revolutionize your creative process</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Advanced AI</h3>
              <p>Powered by cutting-edge machine learning models for the most realistic image generation.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>Lightning Fast</h3>
              <p>Generate high-quality images in seconds, not hours. Speed up your workflow dramatically.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-sliders-h"></i>
              </div>
              <h3>Customizable</h3>
              <p>Fine-tune your results with advanced controls for style, composition, and details.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
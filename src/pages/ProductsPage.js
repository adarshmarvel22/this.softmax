import React from 'react';
// import './LandingPage.css';
import './ProductsPage.css';

const ProductsPage = () => {
  const products = [
    { 
      id: 1, 
      name: 'Aria.Estate', 
      description: 'A dynamic property platform for real estate commerce, management, leasing, and development services.', 
      price: 'Custom Enterprise Pricing',
      icon: '🏢',
      color: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'
    },
    { 
      id: 2, 
      name: 'Note.Delta', 
      description: 'Tech and sci-fi proposal platform with development tools, documentation, and community forums.', 
      price: 'Freemium Model',
      icon: '📝',
      color: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)'
    },
    { 
      id: 3, 
      name: 'Sphereas', 
      description: 'AI platform for text-to-image generation, with upcoming LLM and text-to-video capabilities.', 
      price: 'Subscription Based',
      icon: '🔮',
      color: 'linear-gradient(135deg, #6b21a8 0%, #a855f7 100%)'
    },
  ];

  return (
    <div className="product-page">
      <div className="products-container">
        <h1 className="products-title">Our Products in development</h1>
        <p className="products-subtitle">Innovative solutions designed to transform industries</p>
        
        <div className="product-list">
          {products.map(product => (
            <div 
              key={product.id} 
              className={`product-card product-${product.id}`}
              style={{ background: product.color }}
            >
              <div className="product-content">
                <div className="product-icon">{product.icon}</div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className="price">{product.price}</span>
                <div className="product-cta">
                  <button className="cta-button">Learn More</button>
                </div>
              </div>
              
              {/* Animation elements specific to each product */}
              <div className="product-animation">
                {product.id === 1 && (
                  <>
                    <div className="building"></div>
                    <div className="building"></div>
                    <div className="building"></div>
                    <div className="building"></div>
                    <div className="building"></div>
                  </>
                )}
                {product.id === 2 && (
                  <>
                    <div className="document"></div>
                    <div className="document"></div>
                    <div className="document"></div>
                    <div className="document"></div>
                    <div className="document"></div>
                  </>
                )}
                {product.id === 3 && (
                  <>
                    <div className="orb"></div>
                    <div className="orb"></div>
                    <div className="orb"></div>
                    <div className="orb"></div>
                    <div className="orb"></div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
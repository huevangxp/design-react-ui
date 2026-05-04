import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('ALL')

  return (
    <div className="industrial-wrapper">
      {/* 01 / Navigation */}
      <header className="tech-nav">
        <div className="nav-logo">
          UTILITY<span className="accent-text">™</span> / D-01
        </div>
        <nav className="nav-links">
          <a href="#hero" className="active">HOME</a>
          <a href="#drops">DROPS</a>
          <a href="#archive">ARCHIVE</a>
          <a href="#info">INFO</a>
        </nav>
        <div className="nav-meta">
          <span className="ticker">STATUS: ACTIVE</span>
          <button className="cart-btn">
            CART <span className="cart-count">[0]</span>
          </button>
        </div>
      </header>

      {/* 02 / Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-label">// SS26 NEW DROP // RAW URBAN WEAR</div>
          <h1 className="hero-heading">
            URBAN UTILITY.<br />
            <span className="outline-text">FORGED FOR THE COLD.</span>
          </h1>
          <p className="hero-description">
            ENGINEERED TO WITHSTAND THE ELEMENTS. DROP 01 / SS26 BRINGS REINFORCED
            TEXTILES, TECHNICAL ACCENTS, AND RAW INDUSTRIAL SILHOUETTES TO THE
            STREETS. LIMITED QUANTITIES PRODUCED. NEVER RESTOCKED.
          </p>
          <div className="hero-actions">
            <a href="#drops" className="cta-primary">
              GET THE DROP <span className="arrow-icon">→</span>
            </a>
            <a href="#archive" className="cta-secondary">
              EXPLORE ARCHIVE
            </a>
          </div>
          <div className="hero-specs">
            <div className="spec-item">
              <span className="spec-num">01 /</span>
              <span className="spec-text">REINFORCED FABRIC</span>
            </div>
            <div className="spec-item">
              <span className="spec-num">02 /</span>
              <span className="spec-text">WATER RESISTANT</span>
            </div>
            <div className="spec-item">
              <span className="spec-num">03 /</span>
              <span className="spec-text">REFLECTIVE ACCENTS</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="image-container">
            <div className="crosshairs">
              <span className="ch-tl">+</span>
              <span className="ch-tr">+</span>
              <span className="ch-bl">+</span>
              <span className="ch-br">+</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1556821810-da423a71ddef?auto=format&fit=crop&w=600&q=80" 
              alt="Industrial Streetwear Hoodie" 
              className="visual-img"
            />
          </div>
          <div className="visual-caption">
            [MODEL_ID: 9284-A] // OVERSYNC CARGO HOODIE //
          </div>
        </div>
      </section>

      {/* 03 / Products / Drops Section */}
      <section id="drops" className="drops-section">
        <div className="section-header">
          <div className="section-title">
            <span className="accent-dot"></span> // LATEST_RELEASE / [ALL DROPS]
          </div>
          <div className="filter-buttons">
            <button 
              className={activeTab === 'ALL' ? 'filter-btn active' : 'filter-btn'} 
              onClick={() => setActiveTab('ALL')}
            >
              ALL
            </button>
            <button 
              className={activeTab === 'OUTERWEAR' ? 'filter-btn active' : 'filter-btn'} 
              onClick={() => setActiveTab('OUTERWEAR')}
            >
              OUTERWEAR
            </button>
            <button 
              className={activeTab === 'FOOTWEAR' ? 'filter-btn active' : 'filter-btn'} 
              onClick={() => setActiveTab('FOOTWEAR')}
            >
              FOOTWEAR
            </button>
          </div>
        </div>

        <div className="product-grid">
          {/* Product 1 */}
          {(activeTab === 'ALL' || activeTab === 'OUTERWEAR') && (
            <div className="product-card">
              <div className="product-visual">
                <div className="product-tag">[ LIMITED ]</div>
                <img 
                  src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80" 
                  alt="Industrial Cargo Hoodie" 
                  className="prod-img"
                />
                <div className="product-overlay">
                  <button className="add-to-cart-btn">ADD_TO_CART</button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-meta">
                  <span className="sku">STYLE CODE: 0101-C</span>
                  <span className="price">$145.00</span>
                </div>
                <h3 className="product-name">REINFORCED TACTICAL HOODIE</h3>
              </div>
            </div>
          )}

          {/* Product 2 */}
          {(activeTab === 'ALL' || activeTab === 'FOOTWEAR') && (
            <div className="product-card">
              <div className="product-visual">
                <div className="product-tag">[ NEW ]</div>
                <img 
                  src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80" 
                  alt="Industrial Streetwear Sneakers" 
                  className="prod-img"
                />
                <div className="product-overlay">
                  <button className="add-to-cart-btn">ADD_TO_CART</button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-meta">
                  <span className="sku">STYLE CODE: 0411-S</span>
                  <span className="price">$195.00</span>
                </div>
                <h3 className="product-name">TERRAIN FORCE SNEAKERS</h3>
              </div>
            </div>
          )}

          {/* Product 3 */}
          {(activeTab === 'ALL' || activeTab === 'OUTERWEAR') && (
            <div className="product-card">
              <div className="product-visual">
                <div className="product-tag">[ TACTICAL ]</div>
                <img 
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" 
                  alt="Industrial Tech Jacket" 
                  className="prod-img"
                />
                <div className="product-overlay">
                  <button className="add-to-cart-btn">ADD_TO_CART</button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-meta">
                  <span className="sku">STYLE CODE: 0214-J</span>
                  <span className="price">$220.00</span>
                </div>
                <h3 className="product-name">MODULAR UTILITY JACKET</h3>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 04 / Brand Narrative Section */}
      <section id="archive" className="lookbook-section">
        <div className="lookbook-grid">
          <div className="lookbook-text-card">
            <span className="code-badge">// CORE PHILOSOPHY</span>
            <h2>CONSTRUCTING THE MODERN SILHOUETTE</h2>
            <p>
              OUR MISSION IS ROOTED IN RAW FUNCTIONALITY. EVERY ITEM PRODUCED IN
              OUR ARCHIVE MEETS EXTENSIVE QUALITY TESTING FOR RUGGED DURABILITY,
              ENSURING UNCOMPROMISING COMFORT AND COHESIVE STREET UTILITY.
            </p>
            <a href="#drops" className="lookbook-link">LEARN MORE IN ARCHIVE</a>
          </div>
          <div className="lookbook-visual-card">
            <img 
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80" 
              alt="Urban Architecture / Street Style" 
              className="lb-img"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="tech-footer">
        <div className="footer-top">
          <div className="brand-signature">
            UTILITY™ <span className="dimmed">/ EST. 2026</span>
          </div>
          <div className="footer-links">
            <a href="#about">ABOUT</a>
            <a href="#terms">TERMS</a>
            <a href="#privacy">PRIVACY</a>
            <a href="#support">SUPPORT</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="copyright">© 2026 ALL RIGHTS RESERVED. CODE [UTILITY_SYSTEM: v1.0.4]</span>
          <span className="location">LOC: 35.6762° N, 139.6503° E</span>
        </div>
      </footer>
    </div>
  )
}

export default App

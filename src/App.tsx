import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('ALL')

  return (
    <div className="bg-[#0c0d10] text-[#e2e4e9] font-sans antialiased tracking-tight min-h-screen selection:bg-[#ff4d00] selection:text-white">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 flex flex-col gap-12 lg:gap-20">
        
        {/* 01 / Navigation */}
        <header className="flex justify-between items-center py-6 border-b border-[#22252a] font-mono text-[13px]">
          <div className="font-extrabold text-base tracking-tight text-[#e2e4e9]">
            UTILITY<span className="text-[#ff4d00]">™</span> / D-01
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#hero" className="text-[#e2e4e9] hover:text-white transition-colors duration-200">HOME</a>
            <a href="#drops" className="text-[#8b919d] hover:text-[#e2e4e9] transition-colors duration-200">DROPS</a>
            <a href="#archive" className="text-[#8b919d] hover:text-[#e2e4e9] transition-colors duration-200">ARCHIVE</a>
            <a href="#info" className="text-[#8b919d] hover:text-[#e2e4e9] transition-colors duration-200">INFO</a>
          </nav>
          <div className="flex items-center gap-6">
            <span className="text-[#ff4d00] font-bold hidden sm:inline">STATUS: ACTIVE</span>
            <button className="bg-[#1d2026] border border-[#22252a] text-[#e2e4e9] px-4 py-2 font-mono text-[13px] font-semibold cursor-pointer rounded-sm hover:bg-[#22252a] hover:border-[#8b919d] transition-all duration-200">
              CART <span className="text-[#ff4d00]">[0]</span>
            </button>
          </div>
        </header>

        {/* 02 / Hero Section */}
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center py-10">
          <div className="flex flex-col gap-6">
            <div className="font-mono text-xs text-[#ff4d00] tracking-wider">// SS26 NEW DROP // RAW URBAN WEAR</div>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black leading-[1.05] tracking-tight text-[#e2e4e9]">
              URBAN UTILITY.<br />
              <span className="text-transparent bg-clip-text [-webkit-text-stroke:1px_#e2e4e9]">FORGED FOR THE COLD.</span>
            </h1>
            <p className="text-[15px] text-[#8b919d] max-w-[520px] leading-relaxed">
              ENGINEERED TO WITHSTAND THE ELEMENTS. DROP 01 / SS26 BRINGS REINFORCED
              TEXTILES, TECHNICAL ACCENTS, AND RAW INDUSTRIAL SILHOUETTES TO THE
              STREETS. LIMITED QUANTITIES PRODUCED. NEVER RESTOCKED.
            </p>
            <div className="flex gap-4 mt-3">
              <a href="#drops" className="bg-[#ff4d00] text-white no-underline font-sans font-bold text-sm px-7 py-3.5 rounded-sm inline-flex items-center gap-2 hover:bg-[#e04400] hover:-translate-y-0.5 transition-all duration-200">
                GET THE DROP <span>→</span>
              </a>
              <a href="#archive" className="border border-[#22252a] text-[#e2e4e9] no-underline font-sans font-bold text-sm px-7 py-3.5 rounded-sm inline-flex items-center hover:bg-[#1d2026] hover:border-[#8b919d] transition-all duration-200">
                EXPLORE ARCHIVE
              </a>
            </div>
            <div className="flex gap-8 mt-6 border-t border-[#22252a] pt-6">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[11px] text-[#ff4d00]">01 /</span>
                <span className="text-xs font-bold text-[#e2e4e9] tracking-wider">REINFORCED FABRIC</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[11px] text-[#ff4d00]">02 /</span>
                <span className="text-xs font-bold text-[#e2e4e9] tracking-wider">WATER RESISTANT</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[11px] text-[#ff4d00]">03 /</span>
                <span className="text-xs font-bold text-[#e2e4e9] tracking-wider">REFLECTIVE ACCENTS</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="relative bg-[#14161b] border border-[#22252a] p-6 flex justify-center items-center overflow-hidden hover:border-[#8b919d] group transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <span className="absolute top-3 left-3.5 font-mono text-sm font-light text-[#22252a]">+</span>
                <span className="absolute top-3 right-3.5 font-mono text-sm font-light text-[#22252a]">+</span>
                <span className="absolute bottom-3 left-3.5 font-mono text-sm font-light text-[#22252a]">+</span>
                <span className="absolute bottom-3 right-3.5 font-mono text-sm font-light text-[#22252a]">+</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1556821810-da423a71ddef?auto=format&fit=crop&w=600&q=80" 
                alt="Industrial Streetwear Hoodie" 
                className="max-w-full h-auto aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="font-mono text-[11px] text-[#8b919d] tracking-wider">
              [MODEL_ID: 9284-A] // OVERSYNC CARGO HOODIE //
            </div>
          </div>
        </section>

        {/* 03 / Products / Drops Section */}
        <section id="drops" className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-[#22252a] pb-5 gap-4">
            <div className="font-mono text-sm font-bold text-[#e2e4e9] tracking-wide flex items-center">
              <span className="inline-block w-1.5 h-1.5 bg-[#ff4d00] rounded-full mr-2"></span> // LATEST_RELEASE / [ALL DROPS]
            </div>
            <div className="flex gap-2">
              <button 
                className={`px-4 py-1.5 font-mono text-xs font-semibold cursor-pointer rounded-sm hover:bg-[#1d2026] hover:text-[#e2e4e9] hover:border-[#8b919d] transition-all duration-200 border ${
                  activeTab === 'ALL' ? 'bg-[#1d2026] text-[#e2e4e9] border-[#8b919d]' : 'bg-transparent border-[#22252a] text-[#8b919d]'
                }`} 
                onClick={() => setActiveTab('ALL')}
              >
                ALL
              </button>
              <button 
                className={`px-4 py-1.5 font-mono text-xs font-semibold cursor-pointer rounded-sm hover:bg-[#1d2026] hover:text-[#e2e4e9] hover:border-[#8b919d] transition-all duration-200 border ${
                  activeTab === 'OUTERWEAR' ? 'bg-[#1d2026] text-[#e2e4e9] border-[#8b919d]' : 'bg-transparent border-[#22252a] text-[#8b919d]'
                }`} 
                onClick={() => setActiveTab('OUTERWEAR')}
              >
                OUTERWEAR
              </button>
              <button 
                className={`px-4 py-1.5 font-mono text-xs font-semibold cursor-pointer rounded-sm hover:bg-[#1d2026] hover:text-[#e2e4e9] hover:border-[#8b919d] transition-all duration-200 border ${
                  activeTab === 'FOOTWEAR' ? 'bg-[#1d2026] text-[#e2e4e9] border-[#8b919d]' : 'bg-transparent border-[#22252a] text-[#8b919d]'
                }`} 
                onClick={() => setActiveTab('FOOTWEAR')}
              >
                FOOTWEAR
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            {(activeTab === 'ALL' || activeTab === 'OUTERWEAR') && (
              <div className="bg-[#14161b] border border-[#22252a] rounded overflow-hidden flex flex-col transition-all duration-300 hover:border-[#8b919d] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] group">
                <div className="relative bg-[#0f1013] w-full aspect-[4/5] overflow-hidden flex justify-center items-center">
                  <div className="absolute top-4 left-4 font-mono bg-[#0c0d10] border border-[#22252a] px-2.5 py-1 text-[10px] text-[#d1ff00] tracking-wider z-10">[ LIMITED ]</div>
                  <img 
                    src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80" 
                    alt="Industrial Cargo Hoodie" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute -bottom-10 left-0 w-full bg-[#0c0d10] border-t border-[#22252a] flex justify-center py-3 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-transparent border-none text-[#e2e4e9] font-mono text-xs font-bold cursor-pointer tracking-wide w-full hover:text-[#ff4d00] transition-colors duration-200">ADD_TO_CART</button>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 bg-[#14161b]">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[11px] text-[#8b919d]">STYLE CODE: 0101-C</span>
                    <span className="text-[15px] font-bold text-[#e2e4e9]">$145.00</span>
                  </div>
                  <h3 className="text-base font-extrabold tracking-tight text-[#e2e4e9]">REINFORCED TACTICAL HOODIE</h3>
                </div>
              </div>
            )}

            {/* Product 2 */}
            {(activeTab === 'ALL' || activeTab === 'FOOTWEAR') && (
              <div className="bg-[#14161b] border border-[#22252a] rounded overflow-hidden flex flex-col transition-all duration-300 hover:border-[#8b919d] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] group">
                <div className="relative bg-[#0f1013] w-full aspect-[4/5] overflow-hidden flex justify-center items-center">
                  <div className="absolute top-4 left-4 font-mono bg-[#0c0d10] border border-[#22252a] px-2.5 py-1 text-[10px] text-[#d1ff00] tracking-wider z-10">[ NEW ]</div>
                  <img 
                    src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80" 
                    alt="Industrial Streetwear Sneakers" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute -bottom-10 left-0 w-full bg-[#0c0d10] border-t border-[#22252a] flex justify-center py-3 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-transparent border-none text-[#e2e4e9] font-mono text-xs font-bold cursor-pointer tracking-wide w-full hover:text-[#ff4d00] transition-colors duration-200">ADD_TO_CART</button>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 bg-[#14161b]">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[11px] text-[#8b919d]">STYLE CODE: 0411-S</span>
                    <span className="text-[15px] font-bold text-[#e2e4e9]">$195.00</span>
                  </div>
                  <h3 className="text-base font-extrabold tracking-tight text-[#e2e4e9]">TERRAIN FORCE SNEAKERS</h3>
                </div>
              </div>
            )}

            {/* Product 3 */}
            {(activeTab === 'ALL' || activeTab === 'OUTERWEAR') && (
              <div className="bg-[#14161b] border border-[#22252a] rounded overflow-hidden flex flex-col transition-all duration-300 hover:border-[#8b919d] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] group">
                <div className="relative bg-[#0f1013] w-full aspect-[4/5] overflow-hidden flex justify-center items-center">
                  <div className="absolute top-4 left-4 font-mono bg-[#0c0d10] border border-[#22252a] px-2.5 py-1 text-[10px] text-[#d1ff00] tracking-wider z-10">[ TACTICAL ]</div>
                  <img 
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" 
                    alt="Industrial Tech Jacket" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute -bottom-10 left-0 w-full bg-[#0c0d10] border-t border-[#22252a] flex justify-center py-3 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-transparent border-none text-[#e2e4e9] font-mono text-xs font-bold cursor-pointer tracking-wide w-full hover:text-[#ff4d00] transition-colors duration-200">ADD_TO_CART</button>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 bg-[#14161b]">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[11px] text-[#8b919d]">STYLE CODE: 0214-J</span>
                    <span className="text-[15px] font-bold text-[#e2e4e9]">$220.00</span>
                  </div>
                  <h3 className="text-base font-extrabold tracking-tight text-[#e2e4e9]">MODULAR UTILITY JACKET</h3>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 04 / Brand Narrative Section */}
        <section id="archive" className="border-t border-b border-[#22252a] py-16 md:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
            <div className="flex flex-col gap-5">
              <span className="font-mono text-xs text-[#ff4d00] tracking-wider">// CORE PHILOSOPHY</span>
              <h2 className="text-[32px] font-black leading-tight tracking-tight text-[#e2e4e9]">CONSTRUCTING THE MODERN SILHOUETTE</h2>
              <p className="text-[#8b919d] text-[15px] leading-relaxed">
                OUR MISSION IS ROOTED IN RAW FUNCTIONALITY. EVERY ITEM PRODUCED IN
                OUR ARCHIVE MEETS EXTENSIVE QUALITY TESTING FOR RUGGED DURABILITY,
                ENSURING UNCOMPROMISING COMFORT AND COHESIVE STREET UTILITY.
              </p>
              <a href="#drops" className="font-mono text-[#e2e4e9] text-xs font-bold no-underline border-b border-dashed border-[#22252a] pb-0.5 self-start hover:text-[#ff4d00] hover:border-[#ff4d00] transition-all duration-200">LEARN MORE IN ARCHIVE</a>
            </div>
            <div className="bg-[#14161b] border border-[#22252a] p-4">
              <img 
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80" 
                alt="Urban Architecture / Street Style" 
                className="w-full aspect-square md:aspect-video object-cover block"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 pb-16 flex flex-col gap-8 font-mono text-xs">
          <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-[#22252a] pb-5 gap-4">
            <div className="font-extrabold text-sm">
              UTILITY™ <span className="text-[#8b919d] font-light">/ EST. 2026</span>
            </div>
            <div className="flex gap-6">
              <a href="#about" className="text-[#8b919d] hover:text-white transition-colors duration-200">ABOUT</a>
              <a href="#terms" className="text-[#8b919d] hover:text-white transition-colors duration-200">TERMS</a>
              <a href="#privacy" className="text-[#8b919d] hover:text-white transition-colors duration-200">PRIVACY</a>
              <a href="#support" className="text-[#8b919d] hover:text-white transition-colors duration-200">SUPPORT</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between text-[#8b919d] gap-3">
            <span>© 2026 ALL RIGHTS RESERVED. CODE [UTILITY_SYSTEM: v1.0.4]</span>
            <span>LOC: 35.6762° N, 139.6503° E</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App

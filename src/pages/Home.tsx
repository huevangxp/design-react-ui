interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  return (
    <div className="flex flex-col gap-24 select-none">
      
      {/* 01 / Hero Section */}
      <section id="hero" className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center py-12 md:py-16">
        
        {/* Left Content */}
        <div className="flex flex-col gap-8 animate-fade-up [animation-delay:200ms]">
          <div className="font-mono text-xs text-teal-600 dark:text-[#00b4d8] tracking-widest font-bold">// SS26 NEW DROP // RAW URBAN WEAR</div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-black leading-[1.05] tracking-tight text-[#0f1013] dark:text-[#e2e4e9]">
            URBAN UTILITY.<br />
            <span className="text-transparent bg-clip-text [-webkit-text-stroke:1px_#0f1013] dark:[-webkit-text-stroke:1px_#e2e4e9]">FORGED FOR THE COLD.</span>
          </h1>
          
          <p className="text-base text-[#5a6270] dark:text-[#8b919d] max-w-[520px] leading-relaxed">
            ENGINEERED TO WITHSTAND THE ELEMENTS. DROP 01 / SS26 BRINGS REINFORCED
            TEXTILES, TECHNICAL ACCENTS, AND RAW INDUSTRIAL SILHOUETTES TO THE
            STREETS. LIMITED QUANTITIES PRODUCED. NEVER RESTOCKED.
          </p>
          
          <div className="flex gap-4 mt-2">
            <button 
              onClick={() => setCurrentPage('DROPS')} 
              className="bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-400 dark:to-cyan-500 text-white cursor-pointer no-underline font-sans font-bold text-sm px-8 py-4 rounded-sm inline-flex items-center gap-2 hover:from-teal-600 hover:to-cyan-700 hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-teal-500/20"
            >
              GET THE DROP 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            
            <button 
              onClick={() => setCurrentPage('ARCHIVE')} 
              className="border border-[#d3d8e2] dark:border-[#22252a] text-[#0f1013] dark:text-[#e2e4e9] cursor-pointer no-underline font-sans font-bold text-sm px-8 py-4 rounded-sm inline-flex items-center hover:bg-white dark:hover:bg-[#1d2026] hover:border-[#5a6270] dark:hover:border-[#8b919d] transition-all duration-200"
            >
              EXPLORE ARCHIVE
            </button>
          </div>

          <div className="flex gap-8 mt-4 border-t border-[#d3d8e2] dark:border-[#22252a] pt-8">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] text-teal-600 dark:text-[#00b4d8] font-bold">01 /</span>
              <span className="text-xs font-bold text-[#0f1013] dark:text-[#e2e4e9] tracking-wider flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                REINFORCED FABRIC
              </span>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] text-teal-600 dark:text-[#00b4d8] font-bold">02 /</span>
              <span className="text-xs font-bold text-[#0f1013] dark:text-[#e2e4e9] tracking-wider flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                WATER RESISTANT
              </span>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] text-teal-600 dark:text-[#00b4d8] font-bold">03 /</span>
              <span className="text-xs font-bold text-[#0f1013] dark:text-[#e2e4e9] tracking-wider flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                REFLECTIVE ACCENTS
              </span>
            </div>
          </div>
        </div>
        
        {/* Right Content - Hero Visual */}
        <div className="flex flex-col gap-6 animate-zoom-in [animation-delay:400ms]">
          <div className="relative bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] p-8 flex justify-center items-center overflow-hidden hover:border-[#5a6270] dark:hover:border-[#8b919d] group transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <span className="absolute top-4 left-4 font-mono text-sm font-light text-[#d3d8e2] dark:text-[#22252a]">+</span>
              <span className="absolute top-4 right-4 font-mono text-sm font-light text-[#d3d8e2] dark:text-[#22252a]">+</span>
              <span className="absolute bottom-4 left-4 font-mono text-sm font-light text-[#d3d8e2] dark:text-[#22252a]">+</span>
              <span className="absolute bottom-4 right-4 font-mono text-sm font-light text-[#d3d8e2] dark:text-[#22252a]">+</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1556821810-da423a71ddef?auto=format&fit=crop&w=600&q=80" 
              alt="Industrial Streetwear Hoodie" 
              className="max-w-full h-auto aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          
          <div className="font-mono text-[11px] text-[#5a6270] dark:text-[#8b919d] tracking-wider flex justify-between items-center">
            <span>[MODEL_ID: 9284-A] // OVERSYNC CARGO HOODIE //</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
          </div>
        </div>
      </section>

      {/* 02 / Special Promotion Section */}
      <section className="bg-gradient-to-r from-teal-500/10 to-cyan-500/5 dark:from-teal-500/5 dark:to-cyan-600/5 border border-teal-500/30 dark:border-teal-500/20 p-8 md:p-12 rounded-sm flex flex-col md:flex-row justify-between items-center gap-8 animate-fade-up">
        <div className="flex flex-col gap-3 max-w-[700px]">
          <span className="font-mono text-xs text-teal-600 dark:text-[#00b4d8] font-bold tracking-wider">// PROJECT_MEMBERSHIP //</span>
          <h2 className="text-2xl md:text-3xl font-black text-[#0f1013] dark:text-[#e2e4e9] tracking-tight leading-tight">LIMITED ACCELERATOR ACCESS PROMOTION</h2>
          <p className="text-sm text-[#5a6270] dark:text-[#8b919d] leading-relaxed">
            REGISTER YOUR SYSTEM CREDENTIALS NOW AND ACCESS OUR EXCLUSIVE **SS26 PRE-SALE ENVELOPE**. GET UP TO 20% COMPRESSION PRICE ADJUSTMENTS ON ALL DROPS FOR A LIMITED TIME.
          </p>
        </div>
        <button 
          onClick={() => setCurrentPage('INFO')} 
          className="bg-white dark:bg-[#14161b] text-teal-600 dark:text-[#00b4d8] border border-teal-500/40 dark:border-teal-500/30 font-mono text-xs font-bold px-8 py-4 cursor-pointer hover:bg-teal-500 hover:text-white dark:hover:bg-teal-400 dark:hover:text-black transition-all duration-300 rounded-sm flex items-center gap-2 tracking-wide flex-shrink-0"
        >
          APPLY CREDENTIALS
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </section>

      {/* 03 / Product Mini Grid Detail Card */}
      <section className="flex flex-col gap-10 animate-fade-up">
        <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-[#d3d8e2] dark:border-[#22252a] pb-5 gap-4">
          <div className="font-mono text-sm font-bold text-[#0f1013] dark:text-[#e2e4e9] tracking-wide flex items-center">
            <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span> // PREMIUM_PRODUCT_HIGHLIGHT
          </div>
          <button 
            onClick={() => setCurrentPage('DROPS')} 
            className="font-mono text-xs font-bold text-teal-600 dark:text-[#00b4d8] border-b border-dashed border-teal-500/40 hover:text-teal-700 dark:hover:text-[#0077b6] cursor-pointer transition-colors duration-200 bg-transparent"
          >
            EXPLORE COMPLETE DROPS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] p-6 flex flex-col sm:flex-row items-center gap-6 rounded-sm hover:border-teal-500/50 transition-all duration-300 group">
            <div className="w-full sm:w-[160px] aspect-square overflow-hidden bg-[#e6e9ef] dark:bg-[#0c0d10] flex items-center justify-center border border-[#d3d8e2] dark:border-[#22252a] rounded-sm flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=300&q=80" 
                alt="Product visual" 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow gap-4">
              <div className="flex flex-col gap-2">
                <div className="font-mono text-[10px] text-teal-600 dark:text-[#00b4d8] font-bold">// FOOTWEAR</div>
                <h3 className="text-xl font-bold tracking-tight text-[#0f1013] dark:text-[#e2e4e9]">TERRAIN FORCE SNEAKERS</h3>
                <p className="text-xs text-[#5a6270] dark:text-[#8b919d] leading-relaxed max-w-[340px]">
                  RUGGED OFF-GRID TRAIL SNEAKER DESIGNED WITH AN OVERSIZED VIBRAM OUTSOLE AND TECHNICAL PULL ACCENTS.
                </p>
              </div>
              <div className="flex justify-between items-center border-t border-[#d3d8e2] dark:border-[#22252a] pt-3">
                <span className="font-mono text-sm font-bold text-teal-600 dark:text-[#00b4d8]">$195.00</span>
                <button 
                  onClick={() => setCurrentPage('DROPS')} 
                  className="bg-transparent border-none font-mono text-xs font-bold text-[#0f1013] dark:text-[#e2e4e9] hover:text-teal-500 cursor-pointer transition-colors duration-200"
                >
                  ACQUIRE_ITEM
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] p-6 flex flex-col sm:flex-row items-center gap-6 rounded-sm hover:border-teal-500/50 transition-all duration-300 group">
            <div className="w-full sm:w-[160px] aspect-square overflow-hidden bg-[#e6e9ef] dark:bg-[#0c0d10] flex items-center justify-center border border-[#d3d8e2] dark:border-[#22252a] rounded-sm flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80" 
                alt="Product visual" 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow gap-4">
              <div className="flex flex-col gap-2">
                <div className="font-mono text-[10px] text-teal-600 dark:text-[#00b4d8] font-bold">// OUTERWEAR</div>
                <h3 className="text-xl font-bold tracking-tight text-[#0f1013] dark:text-[#e2e4e9]">MODULAR UTILITY JACKET</h3>
                <p className="text-xs text-[#5a6270] dark:text-[#8b919d] leading-relaxed max-w-[340px]">
                  WATER RESISTANT COATING COMPLETE WITH INDUSTRIAL SLING ATTACHMENTS AND 4 ZIP COMPARTMENTS.
                </p>
              </div>
              <div className="flex justify-between items-center border-t border-[#d3d8e2] dark:border-[#22252a] pt-3">
                <span className="font-mono text-sm font-bold text-teal-600 dark:text-[#00b4d8]">$220.00</span>
                <button 
                  onClick={() => setCurrentPage('DROPS')} 
                  className="bg-transparent border-none font-mono text-xs font-bold text-[#0f1013] dark:text-[#e2e4e9] hover:text-teal-500 cursor-pointer transition-colors duration-200"
                >
                  ACQUIRE_ITEM
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / Core Info & Contact Layout */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#d3d8e2] dark:border-[#22252a] pt-16 animate-fade-up">
        
        {/* Contact Directive Form */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-teal-600 dark:text-[#00b4d8] font-bold">// REACH_COMMUNICATIONS</span>
            <h3 className="text-2xl font-black text-[#0f1013] dark:text-[#e2e4e9] tracking-tight">CONTACT PROJECT_DIRECT</h3>
            <p className="text-sm text-[#5a6270] dark:text-[#8b919d] max-w-[480px]">
              SUBMIT SYSTEM REQUESTS OR INQUIRIES. AN OPERATIVE WILL TRANSMIT FEEDBACK TO YOUR NETWORK CONSOLE AS SOON AS POSSIBLE.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="ENTER NAME / CREDENTIALS" 
              className="bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] focus:border-teal-500 dark:focus:border-[#00b4d8] px-4 py-3 font-mono text-xs outline-none text-[#0f1013] dark:text-[#e2e4e9] rounded-sm transition-all duration-200"
            />
            <input 
              type="email" 
              placeholder="ENTER NETWORK EMAIL" 
              className="bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] focus:border-teal-500 dark:focus:border-[#00b4d8] px-4 py-3 font-mono text-xs outline-none text-[#0f1013] dark:text-[#e2e4e9] rounded-sm transition-all duration-200"
            />
            <textarea 
              rows={3} 
              placeholder="MESSAGE CONTENT" 
              className="bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] focus:border-teal-500 dark:focus:border-[#00b4d8] px-4 py-3 font-mono text-xs outline-none text-[#0f1013] dark:text-[#e2e4e9] rounded-sm resize-none transition-all duration-200"
            ></textarea>
            <button 
              type="button" 
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-mono text-xs font-bold px-6 py-3.5 rounded-sm self-start cursor-pointer hover:from-teal-600 hover:to-cyan-700 transition-all duration-200 shadow-md shadow-teal-500/20"
            >
              TRANSMIT_INQUIRY
            </button>
          </form>
        </div>

        {/* Brand System Info & Credentials */}
        <div className="flex flex-col gap-6 bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] p-8 rounded-sm select-text hover:border-[#5a6270] dark:hover:border-[#8b919d] transition-all duration-200 justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5 border-b border-[#d3d8e2] dark:border-[#22252a] pb-4">
              <span className="font-mono text-xs text-teal-600 dark:text-[#00b4d8] font-bold">// SYSTEM DIRECTORY</span>
              <h3 className="text-xl font-black text-[#0f1013] dark:text-[#e2e4e9] tracking-tight">BRAND CORE SPECIFICATIONS</h3>
            </div>
            
            <p className="text-[#5a6270] dark:text-[#8b919d] text-sm leading-relaxed mb-1">
              THE BRAND OFFERS AN ARRAY OF TECHNICAL PIECES MEANT TO REDEFINE HIGH CONTRAST SILHOUETTES. EACH PIECE GOES THROUGH RAW TEXTILE FABRICATION.
            </p>

            <div className="flex flex-col gap-3 font-mono text-xs">
              <div className="flex justify-between items-center border-b border-dashed border-[#e6e9ef] dark:border-[#1d2026] pb-2.5">
                <span className="text-[#5a6270] dark:text-[#8b919d]">SYSTEM VERSION:</span>
                <span className="text-[#0f1013] dark:text-[#e2e4e9] font-bold">1.0.4 // LATEST</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-[#e6e9ef] dark:border-[#1d2026] pb-2.5">
                <span className="text-[#5a6270] dark:text-[#8b919d]">HQ_LOCATION:</span>
                <span className="text-[#0f1013] dark:text-[#e2e4e9] font-bold">TOKYO // CENTRAL STATION</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-[#e6e9ef] dark:border-[#1d2026] pb-2.5">
                <span className="text-[#5a6270] dark:text-[#8b919d]">PROJECT EMAIL:</span>
                <span className="text-teal-600 dark:text-[#00b4d8] font-bold">support@utility.tm</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setCurrentPage('INFO')} 
            className="font-mono text-[#0f1013] dark:text-[#e2e4e9] cursor-pointer text-xs font-bold no-underline border-b border-dashed border-[#d3d8e2] dark:border-[#22252a] pb-0.5 self-start hover:text-teal-500 hover:border-teal-500 transition-all duration-200 mt-4"
          >
            SEE ALL SYSTEM DETAILS →
          </button>
        </div>
      </section>

    </div>
  );
}

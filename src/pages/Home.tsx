interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  return (
    <section id="hero" className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center py-16 md:py-24 select-none">
      {/* Left Column Content */}
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
      
      {/* Right Column Image Content */}
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
  );
}

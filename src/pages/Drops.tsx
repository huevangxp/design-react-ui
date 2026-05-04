import { useState } from 'react';

export default function Drops() {
  const [activeTab, setActiveTab] = useState('ALL');

  return (
    <section id="drops" className="flex flex-col gap-10 animate-fade-up">
      <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-[#d3d8e2] dark:border-[#22252a] pb-5 gap-4">
        <div className="font-mono text-sm font-bold text-[#0f1013] dark:text-[#e2e4e9] tracking-wide flex items-center">
          <span className="inline-block w-1.5 h-1.5 bg-[#ff4d00] rounded-full mr-2"></span> // LATEST_RELEASE / [ALL DROPS]
        </div>
        <div className="flex gap-2">
          <button 
            className={`px-4 py-1.5 font-mono text-xs font-semibold cursor-pointer rounded-sm hover:bg-white dark:hover:bg-[#1d2026] hover:text-[#0f1013] dark:hover:text-[#e2e4e9] hover:border-[#5a6270] dark:hover:border-[#8b919d] transition-all duration-200 border ${
              activeTab === 'ALL' ? 'bg-white dark:bg-[#1d2026] text-[#0f1013] dark:text-[#e2e4e9] border-[#5a6270] dark:border-[#8b919d]' : 'bg-transparent border-[#d3d8e2] dark:border-[#22252a] text-[#5a6270] dark:text-[#8b919d]'
            }`} 
            onClick={() => setActiveTab('ALL')}
          >
            ALL
          </button>
          <button 
            className={`px-4 py-1.5 font-mono text-xs font-semibold cursor-pointer rounded-sm hover:bg-white dark:hover:bg-[#1d2026] hover:text-[#0f1013] dark:hover:text-[#e2e4e9] hover:border-[#5a6270] dark:hover:border-[#8b919d] transition-all duration-200 border ${
              activeTab === 'OUTERWEAR' ? 'bg-white dark:bg-[#1d2026] text-[#0f1013] dark:text-[#e2e4e9] border-[#5a6270] dark:border-[#8b919d]' : 'bg-transparent border-[#d3d8e2] dark:border-[#22252a] text-[#5a6270] dark:text-[#8b919d]'
            }`} 
            onClick={() => setActiveTab('OUTERWEAR')}
          >
            OUTERWEAR
          </button>
          <button 
            className={`px-4 py-1.5 font-mono text-xs font-semibold cursor-pointer rounded-sm hover:bg-white dark:hover:bg-[#1d2026] hover:text-[#0f1013] dark:hover:text-[#e2e4e9] hover:border-[#5a6270] dark:hover:border-[#8b919d] transition-all duration-200 border ${
              activeTab === 'FOOTWEAR' ? 'bg-white dark:bg-[#1d2026] text-[#0f1013] dark:text-[#e2e4e9] border-[#5a6270] dark:border-[#8b919d]' : 'bg-transparent border-[#d3d8e2] dark:border-[#22252a] text-[#5a6270] dark:text-[#8b919d]'
            }`} 
            onClick={() => setActiveTab('FOOTWEAR')}
          >
            FOOTWEAR
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {/* Product 1 */}
        {(activeTab === 'ALL' || activeTab === 'OUTERWEAR') && (
          <div className="bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] rounded overflow-hidden flex flex-col transition-all duration-300 hover:border-[#5a6270] dark:hover:border-[#8b919d] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] group animate-zoom-in">
            <div className="relative bg-[#e6e9ef] dark:bg-[#0f1013] w-full aspect-[4/5] overflow-hidden flex justify-center items-center">
              <div className="absolute top-4 left-4 font-mono bg-[#f4f5f7] dark:bg-[#0c0d10] border border-[#d3d8e2] dark:border-[#22252a] px-2.5 py-1 text-[10px] text-[#ff4d00] dark:text-[#d1ff00] tracking-wider z-10 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                [ LIMITED ]
              </div>
              <img 
                src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80" 
                alt="Industrial Cargo Hoodie" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute -bottom-10 left-0 w-full bg-[#f4f5f7] dark:bg-[#0c0d10] border-t border-[#d3d8e2] dark:border-[#22252a] flex justify-center py-3 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-transparent border-none text-[#0f1013] dark:text-[#e2e4e9] font-mono text-xs font-bold cursor-pointer tracking-wide w-full hover:text-[#ff4d00] dark:hover:text-[#ff4d00] transition-colors duration-200 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                  ADD_TO_CART
                </button>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 bg-white dark:bg-[#14161b]">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[11px] text-[#5a6270] dark:text-[#8b919d]">STYLE CODE: 0101-C</span>
                <span className="text-[15px] font-bold text-[#0f1013] dark:text-[#e2e4e9]">$145.00</span>
              </div>
              <h3 className="text-base font-extrabold tracking-tight text-[#0f1013] dark:text-[#e2e4e9]">REINFORCED TACTICAL HOODIE</h3>
            </div>
          </div>
        )}

        {/* Product 2 */}
        {(activeTab === 'ALL' || activeTab === 'FOOTWEAR') && (
          <div className="bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] rounded overflow-hidden flex flex-col transition-all duration-300 hover:border-[#5a6270] dark:hover:border-[#8b919d] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] group animate-zoom-in [animation-delay:150ms]">
            <div className="relative bg-[#e6e9ef] dark:bg-[#0f1013] w-full aspect-[4/5] overflow-hidden flex justify-center items-center">
              <div className="absolute top-4 left-4 font-mono bg-[#f4f5f7] dark:bg-[#0c0d10] border border-[#d3d8e2] dark:border-[#22252a] px-2.5 py-1 text-[10px] text-[#ff4d00] dark:text-[#d1ff00] tracking-wider z-10 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                [ NEW ]
              </div>
              <img 
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80" 
                alt="Industrial Streetwear Sneakers" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute -bottom-10 left-0 w-full bg-[#f4f5f7] dark:bg-[#0c0d10] border-t border-[#d3d8e2] dark:border-[#22252a] flex justify-center py-3 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-transparent border-none text-[#0f1013] dark:text-[#e2e4e9] font-mono text-xs font-bold cursor-pointer tracking-wide w-full hover:text-[#ff4d00] dark:hover:text-[#ff4d00] transition-colors duration-200 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                  ADD_TO_CART
                </button>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 bg-white dark:bg-[#14161b]">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[11px] text-[#5a6270] dark:text-[#8b919d]">STYLE CODE: 0411-S</span>
                <span className="text-[15px] font-bold text-[#0f1013] dark:text-[#e2e4e9]">$195.00</span>
              </div>
              <h3 className="text-base font-extrabold tracking-tight text-[#0f1013] dark:text-[#e2e4e9]">TERRAIN FORCE SNEAKERS</h3>
            </div>
          </div>
        )}

        {/* Product 3 */}
        {(activeTab === 'ALL' || activeTab === 'OUTERWEAR') && (
          <div className="bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] rounded overflow-hidden flex flex-col transition-all duration-300 hover:border-[#5a6270] dark:hover:border-[#8b919d] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] group animate-zoom-in [animation-delay:300ms]">
            <div className="relative bg-[#e6e9ef] dark:bg-[#0f1013] w-full aspect-[4/5] overflow-hidden flex justify-center items-center">
              <div className="absolute top-4 left-4 font-mono bg-[#f4f5f7] dark:bg-[#0c0d10] border border-[#d3d8e2] dark:border-[#22252a] px-2.5 py-1 text-[10px] text-[#ff4d00] dark:text-[#d1ff00] tracking-wider z-10 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                [ TACTICAL ]
              </div>
              <img 
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" 
                alt="Industrial Tech Jacket" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute -bottom-10 left-0 w-full bg-[#f4f5f7] dark:bg-[#0c0d10] border-t border-[#d3d8e2] dark:border-[#22252a] flex justify-center py-3 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-transparent border-none text-[#0f1013] dark:text-[#e2e4e9] font-mono text-xs font-bold cursor-pointer tracking-wide w-full hover:text-[#ff4d00] dark:hover:text-[#ff4d00] transition-colors duration-200 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                  ADD_TO_CART
                </button>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 bg-white dark:bg-[#14161b]">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[11px] text-[#5a6270] dark:text-[#8b919d]">STYLE CODE: 0214-J</span>
                <span className="text-[15px] font-bold text-[#0f1013] dark:text-[#e2e4e9]">$220.00</span>
              </div>
              <h3 className="text-base font-extrabold tracking-tight text-[#0f1013] dark:text-[#e2e4e9]">MODULAR UTILITY JACKET</h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

import { useTranslation } from '../context/LanguageContext';

export default function Home() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex flex-col gap-24 select-none">
      
      {/* 01 / Hero Section */}
      <section id="hero" className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center py-12 md:py-16">
        
        {/* Left Content */}
        <div className="flex flex-col gap-8 animate-fade-up [animation-delay:200ms]">
          <div className="font-mono text-xs text-teal-600 dark:text-[#00b4d8] tracking-widest font-bold">
            {t('hero_subtitle')}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-black leading-[1.05] tracking-tight text-[#0f1013] dark:text-[#e2e4e9]">
            {t('hero_title_1')}<br />
            <span className="text-transparent bg-clip-text [-webkit-text-stroke:1px_#0f1013] dark:[-webkit-text-stroke:1px_#e2e4e9]">
              {t('hero_title_2')}
            </span>
          </h1>
          
          <p className="text-base text-[#5a6270] dark:text-[#8b919d] max-w-[520px] leading-relaxed">
            {t('hero_desc')}
          </p>
          
          <div className="flex gap-4 mt-2">
            <button 
              onClick={() => scrollToSection('drops')} 
              className="bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-400 dark:to-cyan-500 text-white cursor-pointer no-underline font-sans font-bold text-sm px-8 py-4 rounded-sm inline-flex items-center gap-2 hover:from-teal-600 hover:to-cyan-700 hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-teal-500/20"
            >
              {t('get_the_drop')} 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            
            <button 
              onClick={() => scrollToSection('archive')} 
              className="border border-zinc-200 dark:border-[#22252a] text-[#0f1013] dark:text-[#e2e4e9] cursor-pointer no-underline font-sans font-bold text-sm px-8 py-4 rounded-sm inline-flex items-center hover:bg-[#f8fafc] dark:hover:bg-[#1d2026] hover:border-[#5a6270] dark:hover:border-[#8b919d] transition-all duration-200"
            >
              {t('explore_archive')}
            </button>
          </div>

          <div className="flex gap-8 mt-4 border-t border-zinc-200 dark:border-[#22252a] pt-8">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] text-teal-600 dark:text-[#00b4d8] font-bold">01 /</span>
              <span className="text-xs font-bold text-[#0f1013] dark:text-[#e2e4e9] tracking-wider flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                {t('feature_1')}
              </span>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] text-teal-600 dark:text-[#00b4d8] font-bold">02 /</span>
              <span className="text-xs font-bold text-[#0f1013] dark:text-[#e2e4e9] tracking-wider flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                {t('feature_2')}
              </span>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] text-teal-600 dark:text-[#00b4d8] font-bold">03 /</span>
              <span className="text-xs font-bold text-[#0f1013] dark:text-[#e2e4e9] tracking-wider flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                {t('feature_3')}
              </span>
            </div>
          </div>
        </div>
        
        {/* Right Content - Hero Visual */}
        <div className="flex flex-col gap-6 animate-zoom-in [animation-delay:400ms]">
          <div className="relative bg-zinc-50/50 dark:bg-[#14161b] border border-zinc-200 dark:border-[#22252a] p-8 flex justify-center items-center overflow-hidden hover:border-[#5a6270] dark:hover:border-[#8b919d] group transition-all duration-300">
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
          <span className="font-mono text-xs text-teal-600 dark:text-[#00b4d8] font-bold tracking-wider">
            {t('promo_subtitle')}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#0f1013] dark:text-[#e2e4e9] tracking-tight leading-tight">
            {t('promo_title')}
          </h2>
          <p className="text-sm text-[#5a6270] dark:text-[#8b919d] leading-relaxed">
            {t('promo_desc')}
          </p>
        </div>
        <button 
          onClick={() => scrollToSection('info')} 
          className="bg-white dark:bg-[#14161b] text-teal-600 dark:text-[#00b4d8] border border-teal-500/40 dark:border-teal-500/30 font-mono text-xs font-bold px-8 py-4 cursor-pointer hover:bg-teal-500 hover:text-white dark:hover:bg-teal-400 dark:hover:text-black transition-all duration-300 rounded-sm flex items-center gap-2 tracking-wide flex-shrink-0"
        >
          {t('promo_btn')}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </section>

      {/* 03 / Product Mini Grid Detail Card */}
      <section id="drops" className="flex flex-col gap-10 animate-fade-up">
        <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-zinc-200 dark:border-[#22252a] pb-5 gap-4">
          <div className="font-mono text-sm font-bold text-[#0f1013] dark:text-[#e2e4e9] tracking-wide flex items-center">
            <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span> // {t('product_highlight')}
          </div>
          <button 
            onClick={() => scrollToSection('drops')} 
            className="font-mono text-xs font-bold text-teal-600 dark:text-[#00b4d8] border-b border-dashed border-teal-500/40 hover:text-teal-700 dark:hover:text-[#0077b6] cursor-pointer transition-colors duration-200 bg-transparent"
          >
            {t('complete_drops')}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-white dark:bg-[#14161b] border border-zinc-200 dark:border-[#22252a] p-6 flex flex-col sm:flex-row items-center gap-6 rounded-sm hover:shadow-lg hover:shadow-zinc-100 dark:hover:shadow-none hover:border-teal-500/50 transition-all duration-300 group">
            <div className="w-full sm:w-[160px] aspect-square overflow-hidden bg-zinc-100/60 dark:bg-[#0c0d10] flex items-center justify-center border border-zinc-200 dark:border-[#22252a] rounded-sm flex-shrink-0">
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
              <div className="flex justify-between items-center border-t border-zinc-200 dark:border-[#22252a] pt-3">
                <span className="font-mono text-sm font-bold text-teal-600 dark:text-[#00b4d8]">$195.00</span>
                <button 
                  onClick={() => scrollToSection('info')} 
                  className="bg-transparent border-none font-mono text-xs font-bold text-[#0f1013] dark:text-[#e2e4e9] hover:text-teal-500 cursor-pointer transition-colors duration-200"
                >
                  {t('acquire_item')}
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-[#14161b] border border-zinc-200 dark:border-[#22252a] p-6 flex flex-col sm:flex-row items-center gap-6 rounded-sm hover:shadow-lg hover:shadow-zinc-100 dark:hover:shadow-none hover:border-teal-500/50 transition-all duration-300 group">
            <div className="w-full sm:w-[160px] aspect-square overflow-hidden bg-zinc-100/60 dark:bg-[#0c0d10] flex items-center justify-center border border-zinc-200 dark:border-[#22252a] rounded-sm flex-shrink-0">
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
              <div className="flex justify-between items-center border-t border-zinc-200 dark:border-[#22252a] pt-3">
                <span className="font-mono text-sm font-bold text-teal-600 dark:text-[#00b4d8]">$220.00</span>
                <button 
                  onClick={() => scrollToSection('info')} 
                  className="bg-transparent border-none font-mono text-xs font-bold text-[#0f1013] dark:text-[#e2e4e9] hover:text-teal-500 cursor-pointer transition-colors duration-200"
                >
                  {t('acquire_item')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03.5 / Archive Section */}
      <section id="archive" className="border-t border-b border-[#e2e8f0] dark:border-[#22252a] py-16 animate-fade-up select-none">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-5">
            <span className="font-mono text-xs text-teal-600 dark:text-[#00b4d8] font-bold tracking-wider flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10h10V2Z"/><path d="m16 12 4-4-4-4"/><path d="M20 8H8"/></svg>
              {t('core_philosophy')}
            </span>
            <h2 className="text-[32px] font-black leading-tight tracking-tight text-[#0f1013] dark:text-[#e2e4e9]">
              {t('archive_title')}
            </h2>
            <p className="text-[#5a6270] dark:text-[#8b919d] text-[15px] leading-relaxed">
              {t('archive_desc')}
            </p>
            <button onClick={() => scrollToSection('drops')} className="font-mono text-[#0f1013] dark:text-[#e2e4e9] cursor-pointer text-xs font-bold no-underline border-b border-dashed border-zinc-200 dark:border-[#22252a] pb-0.5 self-start hover:text-teal-600 hover:border-teal-500 dark:hover:text-[#00b4d8] dark:hover:border-[#00b4d8] transition-all duration-200 bg-transparent">
              {t('learn_more')}
            </button>
          </div>
          <div className="bg-zinc-50/50 dark:bg-[#14161b] border border-zinc-200 dark:border-[#22252a] p-4 animate-zoom-in [animation-delay:200ms]">
            <img 
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80" 
              alt="Urban Architecture / Street Style" 
              className="w-full aspect-square md:aspect-video object-cover block"
            />
          </div>
        </div>
      </section>

      {/* 04 / FAQ & System Specs Section */}
      <section id="info" className="flex flex-col gap-12 animate-fade-up">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-teal-600 dark:text-[#00b4d8] font-bold">
            {t('specs_subtitle')}
          </span>
          <h3 className="text-2xl font-black text-[#0f1013] dark:text-[#e2e4e9] tracking-tight">
            {t('technical_info')}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#14161b] border border-zinc-200 dark:border-[#22252a] p-6 hover:shadow-md hover:shadow-zinc-100 dark:hover:shadow-none hover:border-teal-500/50 transition-all duration-200 rounded-sm">
            <h4 className="font-mono font-bold text-sm text-teal-600 dark:text-[#00b4d8] mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              {t('faq_1_q')}
            </h4>
            <p className="text-[#5a6270] dark:text-[#8b919d] text-sm leading-relaxed">
              {t('faq_1_a')}
            </p>
          </div>

          <div className="bg-white dark:bg-[#14161b] border border-zinc-200 dark:border-[#22252a] p-6 hover:shadow-md hover:shadow-zinc-100 dark:hover:shadow-none hover:border-teal-500/50 transition-all duration-200 rounded-sm">
            <h4 className="font-mono font-bold text-sm text-teal-600 dark:text-[#00b4d8] mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              {t('faq_2_q')}
            </h4>
            <p className="text-[#5a6270] dark:text-[#8b919d] text-sm leading-relaxed">
              {t('faq_2_a')}
            </p>
          </div>
        </div>

        {/* Contact form & Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#e2e8f0] dark:border-[#22252a]/60 pt-12">
          {/* Contact Directive Form */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-teal-600 dark:text-[#00b4d8] font-bold">
                {t('contact_subtitle')}
              </span>
              <h3 className="text-2xl font-black text-[#0f1013] dark:text-[#e2e4e9] tracking-tight">
                {t('contact_title')}
              </h3>
              <p className="text-sm text-[#5a6270] dark:text-[#8b919d] leading-relaxed">
                {t('contact_desc')}
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              <input 
                type="text" 
                placeholder={t('full_name')}
                className="bg-zinc-50/50 focus:bg-white dark:bg-[#14161b] border border-zinc-200 dark:border-[#22252a] focus:border-teal-500 dark:focus:border-[#00b4d8] px-4 py-3 font-mono text-xs outline-none text-[#0f1013] dark:text-[#e2e4e9] rounded-sm transition-all duration-200"
              />
              <input 
                type="email" 
                placeholder={t('email')}
                className="bg-zinc-50/50 focus:bg-white dark:bg-[#14161b] border border-zinc-200 dark:border-[#22252a] focus:border-teal-500 dark:focus:border-[#00b4d8] px-4 py-3 font-mono text-xs outline-none text-[#0f1013] dark:text-[#e2e4e9] rounded-sm transition-all duration-200"
              />
              <textarea 
                rows={3} 
                placeholder={t('message')}
                className="bg-zinc-50/50 focus:bg-white dark:bg-[#14161b] border border-zinc-200 dark:border-[#22252a] focus:border-teal-500 dark:focus:border-[#00b4d8] px-4 py-3 font-mono text-xs outline-none text-[#0f1013] dark:text-[#e2e4e9] rounded-sm resize-none transition-all duration-200"
              ></textarea>
              <button 
                type="button" 
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-mono text-xs font-bold px-6 py-3.5 rounded-sm self-start cursor-pointer hover:from-teal-600 hover:to-cyan-700 transition-all duration-200 shadow-md shadow-teal-500/20"
              >
                {t('transmit')}
              </button>
            </form>
          </div>

          {/* Brand System Info & Credentials */}
          <div className="flex flex-col gap-6 bg-zinc-50/40 dark:bg-[#14161b] border border-zinc-200 dark:border-[#22252a] p-8 rounded-sm select-text hover:border-teal-500/50 hover:shadow-md hover:shadow-zinc-100 dark:hover:shadow-none transition-all duration-200 justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5 border-b border-zinc-200 dark:border-[#22252a] pb-4">
                <span className="font-mono text-xs text-teal-600 dark:text-[#00b4d8] font-bold">// SYSTEM DIRECTORY</span>
                <h3 className="text-xl font-black text-[#0f1013] dark:text-[#e2e4e9] tracking-tight">{t('directives_title')}</h3>
              </div>
              
              <p className="text-[#5a6270] dark:text-[#8b919d] text-sm leading-relaxed mb-1">
                THE BRAND OFFERS AN ARRAY OF TECHNICAL PIECES MEANT TO REDEFINE HIGH CONTRAST SILHOUETTES. EACH PIECE GOES THROUGH RAW TEXTILE FABRICATION.
              </p>

              <div className="flex flex-col gap-3 font-mono text-xs">
                <div className="flex justify-between items-center border-b border-dashed border-zinc-200 dark:border-[#1d2026] pb-2.5">
                  <span className="text-[#5a6270] dark:text-[#8b919d]">{t('system_version')}</span>
                  <span className="text-[#0f1013] dark:text-[#e2e4e9] font-bold">1.0.4 // LATEST</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-zinc-200 dark:border-[#1d2026] pb-2.5">
                  <span className="text-[#5a6270] dark:text-[#8b919d]">{t('office')}</span>
                  <span className="text-[#0f1013] dark:text-[#e2e4e9] font-bold">TOKYO // CENTRAL STATION</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-zinc-200 dark:border-[#1d2026] pb-2.5">
                  <span className="text-[#5a6270] dark:text-[#8b919d]">PROJECT EMAIL:</span>
                  <span className="text-teal-600 dark:text-[#00b4d8] font-bold">support@utility.tm</span>
                </div>
              </div>
            </div>

            <div className="border border-zinc-200 dark:border-[#22252a] bg-white dark:bg-[#0c0d10] p-4 mt-2 font-mono text-[11px] text-[#5a6270] dark:text-[#8b919d] leading-relaxed rounded-sm select-none flex gap-3 items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600 flex-shrink-0 mt-0.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>{t('disclaimer')}</span>
            </div>

            <button 
              onClick={() => scrollToSection('hero')} 
              className="font-mono text-[#0f1013] dark:text-[#e2e4e9] cursor-pointer text-xs font-bold no-underline border-b border-dashed border-zinc-200 dark:border-[#22252a] pb-0.5 self-start hover:text-teal-500 hover:border-teal-500 transition-all duration-200 mt-4"
            >
              BACK TO SYSTEM START ↑
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

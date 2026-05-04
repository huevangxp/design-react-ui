import { useTranslation } from '../context/LanguageContext';

export default function Info() {
  const { t } = useTranslation();

  return (
    <section id="info" className="flex flex-col gap-16 border-t border-b border-[#d3d8e2] dark:border-[#22252a] py-16 animate-fade-up select-none">
      
      {/* 01 / Header */}
      <div className="flex flex-col gap-4">
        <div className="font-mono text-xs text-teal-600 dark:text-[#00b4d8] tracking-widest font-bold">
          {t('specs_subtitle')}
        </div>
        <h2 className="text-[32px] font-black leading-tight tracking-tight text-[#0f1013] dark:text-[#e2e4e9]">
          {t('technical_info')}
        </h2>
        <p className="text-[#5a6270] dark:text-[#8b919d] text-[15px] leading-relaxed max-w-[640px]">
          DISCOVER SYSTEM WORKFLOWS, CARE INSTRUCTIONS FOR REINFORCED TEXTILES, AND PROJECT DIRECTIVES.
        </p>
      </div>

      {/* 02 / FAQ Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] p-6 hover:border-[#5a6270] dark:hover:border-[#8b919d] transition-all duration-200">
          <h3 className="font-mono font-bold text-sm text-teal-600 dark:text-[#00b4d8] mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            {t('faq_1_q')}
          </h3>
          <p className="text-[#5a6270] dark:text-[#8b919d] text-sm leading-relaxed">
            {t('faq_1_a')}
          </p>
        </div>

        <div className="bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] p-6 hover:border-[#5a6270] dark:hover:border-[#8b919d] transition-all duration-200">
          <h3 className="font-mono font-bold text-sm text-teal-600 dark:text-[#00b4d8] mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            {t('faq_2_q')}
          </h3>
          <p className="text-[#5a6270] dark:text-[#8b919d] text-sm leading-relaxed">
            {t('faq_2_a')}
          </p>
        </div>
      </div>

      {/* 03 / Contact & Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-[#d3d8e2] dark:border-[#22252a] pt-16">
        
        {/* Left Column - Form */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-teal-600 dark:text-[#00b4d8] font-bold">
              {t('contact_subtitle')}
            </span>
            <h3 className="text-2xl font-black text-[#0f1013] dark:text-[#e2e4e9] tracking-tight">
              {t('contact_title')}
            </h3>
          </div>
          
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#5a6270] dark:text-[#8b919d] tracking-wide">{t('full_name')}</label>
              <input 
                type="text" 
                placeholder="ENTER NAME" 
                className="bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] focus:border-teal-500 dark:focus:border-[#00b4d8] outline-none px-4 py-3 font-mono text-xs tracking-wide rounded-sm text-[#0f1013] dark:text-[#e2e4e9] placeholder-[#a2a8b5] transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#5a6270] dark:text-[#8b919d] tracking-wide">{t('email')}</label>
              <input 
                type="email" 
                placeholder="ENTER EMAIL" 
                className="bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] focus:border-teal-500 dark:focus:border-[#00b4d8] outline-none px-4 py-3 font-mono text-xs tracking-wide rounded-sm text-[#0f1013] dark:text-[#e2e4e9] placeholder-[#a2a8b5] transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#5a6270] dark:text-[#8b919d] tracking-wide">{t('message')}</label>
              <textarea 
                rows={4} 
                placeholder="ENTER YOUR MESSAGE OR INQUIRY" 
                className="bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] focus:border-teal-500 dark:focus:border-[#00b4d8] outline-none px-4 py-3 font-mono text-xs tracking-wide rounded-sm text-[#0f1013] dark:text-[#e2e4e9] placeholder-[#a2a8b5] transition-all duration-200 resize-none"
              ></textarea>
            </div>

            <button 
              type="button" 
              className="bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-400 dark:to-cyan-500 hover:from-teal-600 hover:to-cyan-700 text-white font-mono text-xs font-bold px-6 py-4 rounded-sm tracking-widest cursor-pointer self-start transition-all duration-300 shadow-md shadow-teal-500/20"
            >
              {t('transmit')}
            </button>
          </form>
        </div>

        {/* Right Column - Project Metadata */}
        <div className="flex flex-col gap-8 bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] p-8 rounded-sm select-text hover:border-[#5a6270] dark:hover:border-[#8b919d] transition-all duration-200">
          <div className="flex flex-col gap-2 border-b border-[#d3d8e2] dark:border-[#22252a] pb-4">
            <span className="font-mono text-xs text-teal-600 dark:text-[#00b4d8] font-bold">// ACCESS_INFO</span>
            <h3 className="text-xl font-black text-[#0f1013] dark:text-[#e2e4e9] tracking-tight">{t('directives_title')}</h3>
          </div>

          <div className="flex flex-col gap-4 text-sm font-mono tracking-tight leading-relaxed">
            <div className="flex justify-between items-center border-b border-dashed border-[#e6e9ef] dark:border-[#1d2026] pb-3">
              <span className="text-[#5a6270] dark:text-[#8b919d]">{t('office')}</span>
              <span className="text-[#0f1013] dark:text-[#e2e4e9] font-bold">{t('office_loc')}</span>
            </div>

            <div className="flex justify-between items-center border-b border-dashed border-[#e6e9ef] dark:border-[#1d2026] pb-3">
              <span className="text-[#5a6270] dark:text-[#8b919d]">EMAIL:</span>
              <span className="text-teal-600 dark:text-[#00b4d8] font-bold">support@utility.tm</span>
            </div>

            <div className="flex justify-between items-center border-b border-dashed border-[#e6e9ef] dark:border-[#1d2026] pb-3">
              <span className="text-[#5a6270] dark:text-[#8b919d]">COMMUNICATIONS:</span>
              <span className="text-[#0f1013] dark:text-[#e2e4e9] font-bold">+81-3-4567-8901</span>
            </div>

            <div className="flex justify-between items-center border-b border-dashed border-[#e6e9ef] dark:border-[#1d2026] pb-3">
              <span className="text-[#5a6270] dark:text-[#8b919d]">{t('system_version')}</span>
              <span className="text-[#0f1013] dark:text-[#e2e4e9] font-bold">v1.0.4-SS26</span>
            </div>

            <div className="flex justify-between items-center border-b border-dashed border-[#e6e9ef] dark:border-[#1d2026] pb-3">
              <span className="text-[#5a6270] dark:text-[#8b919d]">{t('net_status')}</span>
              <span className="text-green-500 font-bold flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                {t('active_synced')}
              </span>
            </div>
          </div>

          <div className="border border-[#d3d8e2] dark:border-[#22252a] bg-[#f4f5f7] dark:bg-[#0c0d10] p-4 mt-2 font-mono text-[11px] text-[#5a6270] dark:text-[#8b919d] leading-relaxed rounded-sm select-none flex gap-3 items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600 flex-shrink-0 mt-0.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <span>{t('disclaimer')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

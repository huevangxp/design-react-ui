import { useTranslation } from '../context/LanguageContext';

interface ArchiveProps {
  setCurrentPage: (page: string) => void;
}

export default function Archive({ setCurrentPage }: ArchiveProps) {
  const { t } = useTranslation();

  return (
    <section id="archive" className="border-t border-b border-[#d3d8e2] dark:border-[#22252a] py-16 md:py-8 animate-fade-up select-none">
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
          <button onClick={() => setCurrentPage('DROPS')} className="font-mono text-[#0f1013] dark:text-[#e2e4e9] cursor-pointer text-xs font-bold no-underline border-b border-dashed border-[#d3d8e2] dark:border-[#22252a] pb-0.5 self-start hover:text-teal-600 hover:border-teal-500 dark:hover:text-[#00b4d8] dark:hover:border-[#00b4d8] transition-all duration-200 bg-transparent">
            {t('learn_more')}
          </button>
        </div>
        <div className="bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] p-4 animate-zoom-in [animation-delay:200ms]">
          <img 
            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80" 
            alt="Urban Architecture / Street Style" 
            className="w-full aspect-square md:aspect-video object-cover block"
          />
        </div>
      </div>
    </section>
  );
}

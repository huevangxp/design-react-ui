interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

export default function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
  return (
    <header className="flex justify-between items-center py-6 border-b border-[#d3d8e2] dark:border-[#22252a] font-mono text-[13px] animate-fade-up">
      <div className="font-extrabold text-base tracking-tight text-[#0f1013] dark:text-[#e2e4e9] flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff4d00]"><rect width="8" height="8" x="2" y="2" rx="1"/><rect width="8" height="8" x="14" y="2" rx="1"/><rect width="8" height="8" x="2" y="14" rx="1"/><rect width="8" height="8" x="14" y="14" rx="1"/></svg>
        UTILITY<span className="text-[#ff4d00]">™</span> / D-01
      </div>
      <nav className="hidden md:flex gap-8">
        <a href="#hero" className="text-[#0f1013] dark:text-[#e2e4e9] hover:text-[#ff4d00] transition-colors duration-200">HOME</a>
        <a href="#drops" className="text-[#5a6270] dark:text-[#8b919d] hover:text-[#0f1013] dark:hover:text-[#e2e4e9] transition-colors duration-200">DROPS</a>
        <a href="#archive" className="text-[#5a6270] dark:text-[#8b919d] hover:text-[#0f1013] dark:hover:text-[#e2e4e9] transition-colors duration-200">ARCHIVE</a>
        <a href="#info" className="text-[#5a6270] dark:text-[#8b919d] hover:text-[#0f1013] dark:hover:text-[#e2e4e9] transition-colors duration-200">INFO</a>
      </nav>
      <div className="flex items-center gap-4">
        {/* Theme Toggle Switch */}
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 border border-[#d3d8e2] dark:border-[#22252a] bg-white dark:bg-[#1d2026] hover:bg-[#e6e9ef] dark:hover:bg-[#2c313d] text-[#0f1013] dark:text-[#e2e4e9] rounded-sm cursor-pointer transition-all duration-200 flex items-center justify-center hover:scale-105"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? (
            /* Sun Icon */
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          ) : (
            /* Moon Icon */
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          )}
        </button>
        <span className="text-[#ff4d00] font-bold hidden sm:inline">STATUS: ACTIVE</span>
        <button className="bg-white dark:bg-[#1d2026] border border-[#d3d8e2] dark:border-[#22252a] text-[#0f1013] dark:text-[#e2e4e9] px-4 py-2 font-mono text-[13px] font-semibold cursor-pointer rounded-sm hover:bg-[#e6e9ef] dark:hover:bg-[#22252a] hover:border-[#5a6270] dark:hover:border-[#8b919d] transition-all duration-200 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          CART <span className="text-[#ff4d00]">[0]</span>
        </button>
      </div>
    </header>
  );
}

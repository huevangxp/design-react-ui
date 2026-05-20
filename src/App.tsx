import { useState, useEffect } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Home from './pages/Home'

function AppContent() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Manage Dark/Light mode theme
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f4f5f7] dark:bg-[#0c0d10] text-[#0f1013] dark:text-[#e2e4e9] font-sans antialiased tracking-tight min-h-screen transition-colors duration-300 selection:bg-teal-500 selection:text-white pb-16">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 flex flex-col gap-12 lg:gap-20">
        
        {/* Navigation */}
        <Header 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode} 
        />

        {/* Home Landing Page Content */}
        <main className="min-h-[50vh]">
          <Home />
        </main>

        {/* Technical Footer */}
        <footer className="py-10 pb-16 flex flex-col gap-8 font-mono text-xs animate-fade-up select-none">
          <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-[#d3d8e2] dark:border-[#22252a] pb-5 gap-4">
            <div className="font-extrabold text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500"><rect width="8" height="8" x="2" y="2" rx="1"/><rect width="8" height="8" x="14" y="2" rx="1"/><rect width="8" height="8" x="2" y="14" rx="1"/><rect width="8" height="8" x="14" y="14" rx="1"/></svg>
              UTILITY™ <span className="text-[#5a6270] dark:text-[#8b919d] font-light">/ EST. 2026</span>
            </div>
            <div className="flex gap-6">
              <button onClick={() => scrollToSection('archive')} className="text-[#5a6270] dark:text-[#8b919d] bg-transparent border-none cursor-pointer hover:text-teal-600 dark:hover:text-[#00b4d8] transition-colors duration-200">ABOUT</button>
              <button onClick={() => scrollToSection('info')} className="text-[#5a6270] dark:text-[#8b919d] bg-transparent border-none cursor-pointer hover:text-teal-600 dark:hover:text-[#00b4d8] transition-colors duration-200">TERMS</button>
              <button onClick={() => scrollToSection('info')} className="text-[#5a6270] dark:text-[#8b919d] bg-transparent border-none cursor-pointer hover:text-teal-600 dark:hover:text-[#00b4d8] transition-colors duration-200">PRIVACY</button>
              <button onClick={() => scrollToSection('info')} className="text-[#5a6270] dark:text-[#8b919d] bg-transparent border-none cursor-pointer hover:text-teal-600 dark:hover:text-[#00b4d8] transition-colors duration-200">SUPPORT</button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between text-[#5a6270] dark:text-[#8b919d] gap-3">
            <span>© 2026 ALL RIGHTS RESERVED. CODE [UTILITY_SYSTEM: v1.0.4]</span>
            <span>LOC: 35.6762° N, 139.6503° E</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

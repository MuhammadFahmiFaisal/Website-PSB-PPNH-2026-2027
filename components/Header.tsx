import React, { useState, useEffect } from 'react';
import logo from '../public/LOGONH.png';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Initial check for theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Profil', href: '#about' },
    { name: 'Program', href: '#programs' },
    { name: 'Pendaftaran', href: '#admissions' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Video', href: '#videos' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg py-3 dark:bg-navy-dark/95 backdrop-blur-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-10 lg:px-20">
        <div className="flex items-center gap-4 text-white">
          <div className="w-10 h-10 flex items-center">
            <img 
              src={logo} 
              alt="Logo Nurul Huda Malati" 
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            Nurul Huda Malati
          </h2>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Toggle Dark Mode"
            >
              <span className="material-symbols-outlined text-[20px] block">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-navy font-bold text-sm hover:bg-white transition-colors">
              <span className="truncate">Login Santri</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Toggle Dark Mode"
            >
              <span className="material-symbols-outlined text-[20px] block">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          <button 
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-navy dark:bg-navy-dark shadow-xl border-t border-white/10 p-4 flex flex-col gap-4">
           {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white text-base font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <button className="w-full flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-navy font-bold text-sm hover:bg-white transition-colors">
              <span className="truncate">Login Santri</span>
            </button>
        </div>
      )}
    </header>
  );
};

export default Header;
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full top-0 sticky z-50 dark:bg-surface-container-low border-surface-muted dark:border-outline-variant bg-primary transition-all duration-200 ease-in-out ${
        scrolled ? 'shadow-md py-1' : ''
      }`}
    >
      <div className="flex justify-between items-center h-16 px-margin-desktop max-w-container-max mx-auto">
        <a href="#" className="font-headline-md text-headline-md font-bold dark:text-primary-fixed text-white">
          CulinaryNest
        </a>
        
        <nav className="hidden md:flex gap-gutter items-center">
          <a href="#" className="font-label-md text-label-md font-bold border-b-2 pb-1 text-white border-white">
            Home
          </a>
          <a href="#" className="font-label-md text-label-md dark:text-surface-variant hover:text-primary transition-colors text-white">
            Meals
          </a>
          <a href="#" className="font-label-md text-label-md dark:text-surface-variant hover:text-primary transition-colors text-white">
            Contact
          </a>
          <a href="#" className="font-label-md text-label-md dark:text-surface-variant hover:text-primary transition-colors text-white">
            About Us
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-2xl hover:opacity-80 transition-all text-white">
            search
          </button>
          <button className="material-symbols-outlined text-2xl hover:opacity-80 transition-all text-white">
            account_circle
          </button>
          <button className="md:hidden material-symbols-outlined text-2xl text-white">
            menu
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#8A0026] fixed top-0 w-full z-50 shadow-md">
      <nav className="flex justify-between items-center w-full px-6 md:px-12 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold text-white tracking-wide">
          CulinaryNest
        </div>
        
        {/* Menú Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Recipes</a>
          <a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Guides</a>
          <a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">About</a>
          <a className="text-sm font-bold text-white border-b-2 border-white pb-1" href="#">Contact</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm text-white font-bold hover:opacity-90">Sign In</button>
          
          {/* Botón Hamburguesa Móvil */}
          <button 
            className="material-symbols-outlined text-white md:hidden select-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'close' : 'menu'}
          </button>
        </div>
      </nav>

      {/* Menú Desplegable Móvil */}
      <div 
        className={`md:hidden bg-[#8A0026] border-t border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          <a className="text-sm text-white/80 hover:text-white py-2" href="#">Recipes</a>
          <a className="text-sm text-white/80 hover:text-white py-2" href="#">Guides</a>
          <a className="text-sm text-white/80 hover:text-white py-2" href="#">About</a>
          <a className="text-sm text-white font-bold py-2" href="#">Contact</a>
          <button className="w-full text-left text-sm text-white font-bold py-2 border-t border-white/10 mt-2">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
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
          </button>
        </div>
      </div>
    </header>
  );
}
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
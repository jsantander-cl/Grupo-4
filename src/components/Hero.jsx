import { useState } from 'react';

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', searchTerm);
  };

  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage: "url(https://st.depositphotos.com/62628780/59708/i/450/depositphotos_597080062-stock-photo-eat-cook-enjoy-family-young.jpg)"
          }}
        >
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full text-center md:text-left">
        <div className="max-w-2xl bg-white/10 backdrop-blur-md p-stack-lg rounded-xl border border-white/20">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-stack-md drop-shadow-lg">
            Crea Momentos Deliciosos en Familia
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 mb-stack-lg">
            Descubre miles de recetas diseñadas para nutrir tu hogar con amor y sabor.
          </p>
          
          <form onSubmit={handleSearch} className="flex bg-white rounded-lg p-2 shadow-xl max-w-xl">
            <span className="material-symbols-outlined text-on-surface-variant px-3 py-2">
              search
            </span>
            <input
              type="text"
              placeholder="Busca tu receta favorita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-none focus:ring-0 font-body-md text-body-md text-on-surface-variant"
            />
            <button 
              type="submit"
              className="bg-primary hover:bg-on-primary-fixed-variant text-white px-stack-lg py-2 rounded-lg transition-all font-label-md text-label-md"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
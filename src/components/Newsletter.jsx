import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Suscribiendo:', email);
    setEmail('');
  };

  return (
    <section className="py-24 relative overflow-hidden bg-primary text-white">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <span className="material-symbols-outlined text-[300px] absolute -right-20 -top-20">
          restaurant_menu
        </span>
      </div>

      <div className="max-w-container-max mx-auto px-margin-desktop relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">
            ¿Quieres cocinar algo nuevo?
          </h2>
          <p className="font-body-lg text-body-lg mb-stack-lg opacity-90">
            Suscríbete para recibir nuevas recetas, consejos de cocina y promociones exclusivas en tu bandeja de entrada.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:bg-white focus:text-on-surface transition-all w-full md:max-w-xs font-body-md outline-none"
              required
            />
            <button 
              type="submit"
              className="bg-white text-primary hover:bg-surface-muted px-8 py-4 rounded-lg font-label-md text-label-md transition-all shadow-lg transform active:scale-95"
            >
              Suscribirme
            </button>
          </form>

          <p className="font-label-sm text-label-sm mt-4 opacity-70">
            Al suscribirte, aceptas nuestras políticas de privacidad.
          </p>
        </div>
      </div>
    </section>
  );
}
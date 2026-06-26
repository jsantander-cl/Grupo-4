import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="bg-[#FAF8F6] min-h-screen flex flex-col font-sans">
      {/* HEADER COMPONENTE REUTILIZABLE */}
      <Header />

      {/* CONTENIDO PRINCIPAL */}
      <main className="pt-24 flex-grow">
        
        {/* Hero Section */}
        <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#8A0026] mb-3">
            Estamos para ayudarte
          </h1>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ¿Tienes alguna duda sobre una receta, necesitas soporte con tu cuenta o simplemente quieres saludarnos? Nuestro equipo está listo para escucharte.
          </p>
        </section>

        {/* Formulario e Info Cards */}
        <section className="px-6 md:px-12 pb-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Formulario */}
            <div className="md:col-span-7 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-6">Envíanos un mensaje</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500">Nombre completo</label>
                    <input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-[#8A0026] focus:ring-1 focus:ring-[#8A0026] outline-none transition-all" placeholder="Ej. Ana García" type="text" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500">Correo electrónico</label>
                    <input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-[#8A0026] focus:ring-1 focus:ring-[#8A0026] outline-none transition-all" placeholder="ana@ejemplo.com" type="email" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500">Asunto</label>
                  <input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-[#8A0026] focus:ring-1 focus:ring-[#8A0026] outline-none transition-all" placeholder="¿En qué podemos ayudarte?" type="text" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500">Mensaje</label>
                  <textarea className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-[#8A0026] focus:ring-1 focus:ring-[#8A0026] outline-none transition-all resize-none" placeholder="Escribe tu mensaje aquí..." rows="4"></textarea>
                </div>
                <button className="w-full sm:w-auto px-6 py-2.5 bg-[#8A0026] text-white text-sm font-semibold rounded-lg hover:opacity-95 transition-all shadow-sm" type="submit">
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Info Lateral */}
            <div className="md:col-span-5 space-y-6">
              <div className="bg-[#8A0026] text-white p-8 rounded-xl shadow-sm">
                <h2 className="text-lg font-bold mb-6">Información de contacto</h2>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-xl opacity-90 mt-0.5">mail</span>
                    <div>
                      <p className="text-xs opacity-70">Correo de soporte</p>
                      <p className="font-medium">hola@culinarynest.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-xl opacity-90 mt-0.5">call</span>
                    <div>
                      <p className="text-xs opacity-70">Teléfono</p>
                      <p className="font-medium">+34 912 345 678</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-xl opacity-90 mt-0.5">location_on</span>
                    <div>
                      <p className="text-xs opacity-70">Oficina central</p>
                      <p className="font-medium">Calle de la Gastronomía, 42<br />28001 Madrid, España</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFFDF9] p-6 rounded-xl border border-amber-100">
                <h3 className="text-sm font-bold text-gray-800 mb-2">Síguenos en redes</h3>
                <p className="text-xs text-gray-500 mb-4">Únete a nuestra comunidad para recetas diarias e inspiración culinaria.</p>
                <div className="flex gap-3">
                  <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#8A0026]/10 text-[#8A0026] hover:bg-[#8A0026] hover:text-white transition-all" href="#">
                    <span className="material-symbols-outlined text-lg">photo_camera</span>
                  </a>
                  <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#8A0026]/10 text-[#8A0026] hover:bg-[#8A0026] hover:text-white transition-all" href="#">
                    <span className="material-symbols-outlined text-lg">face</span>
                  </a>
                  <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#8A0026]/10 text-[#8A0026] hover:bg-[#8A0026] hover:text-white transition-all" href="#">
                    <span className="material-symbols-outlined text-lg">smart_display</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#F7F5F3] py-12 border-t border-gray-100">
          <div className="px-6 md:px-12 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-[#8A0026]">Preguntas Frecuentes</h2>
              <p className="text-xs text-gray-500">Resolvemos tus dudas rápidamente</p>
            </div>
            
            <div className="space-y-3">
              {[
                { q: "¿Cómo puedo guardar mis recetas favoritas?", a: "Para guardar recetas, debes iniciar sesión en tu cuenta. Una vez dentro, verás un icono de corazón en cada receta; simplemente haz clic para añadirla a tu colección privada." },
                { q: "¿Las guías de cocina son gratuitas?", a: "Ofrecemos una amplia selección de guías básicas gratuitas. El contenido especializado y cursos avanzados forman parte de nuestra suscripción Premium." },
                { q: "¿Cómo puedo cancelar mi suscripción?", a: "Puedes gestionar tu suscripción en cualquier momento desde los ajustes de tu perfil. No hay periodos de permanencia obligatorios." }
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-2cm">
                  <button className="w-full px-5 py-3.5 flex justify-between items-center text-left hover:bg-gray-50 font-medium text-xs text-gray-700" onClick={() => toggleAccordion(i)}>
                    <span>{faq.q}</span>
                    <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${activeAccordion === i ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeAccordion === i ? 'max-h-24 border-t border-gray-100' : 'max-h-0'}`}>
                    <p className="px-5 py-3 text-xs text-gray-500 leading-relaxed bg-gray-50/50">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full relative h-[380px] bg-gray-200 border-t border-gray-200 overflow-hidden">
          <img className="w-full h-full object-cover grayscale opacity-90" alt="Collage de gastronomía" src="/imgProyect.jpg" />
          <div className="absolute bottom-6 right-6 bg-white p-5 rounded-lg shadow-md max-w-xs border border-gray-100">
            <h4 className="text-xs font-bold text-[#8A0026] mb-1">Visítanos</h4>
            <p className="text-[11px] text-gray-500 leading-normal">Estamos ubicados en el corazón de Madrid, rodeados de inspiración gastronómica.</p>
          </div>
        </section>

      </main>

      {/* FOOTER COMPONENTE REUTILIZABLE */}
      <Footer />
    </div>
  );
}
import Footer from "./Footer";
import Header from "./Header";

function AboutUs() {
  return (
    <>
      <Header />
      <main className="mt-20">
        <section className="relative h-[60vh] md:h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Equipo de cocina trabajando en armonía"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY00dwNOirhhnaROtejAM3ihEFKPNg19-2MgNr3L3xS6QhI8xxlDsZf88LQW1SkH_Ti3n5_M0kuyT6EEfNIsHhsPNHS-dydOSq72eVN9hBB4878OScwa3p-cPZ50caQJkgZVgQ9CvLHrh2LmHeaKVOLiehA3EChTucRry8a_Y0YZyp_YHyhflrKeXqWc_mgTCOfGi_CsDqOqjR0Ta0Bv9qreOuN1f-RKaRzISR2ImM3DTomiJNJhUGtCplMDKTF5E855C97wrSYc8"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 w-full px-6 lg:px-10 max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <span className="text-white/80 uppercase tracking-widest text-xs font-bold bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm inline-block mb-4">
                Bienvenidos
              </span>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tighter">
                Nuestra Pasión por la Cocina
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-lg font-normal opacity-90">
                Creemos que cada hogar puede ser el escenario de una obra
                maestra culinaria. Nuestra misión es guiarte en ese viaje
                creativo.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-[#920029]/10 text-[#920029] rounded-full text-xs font-bold tracking-wider">
                NUESTRA MISIÓN
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#920029] tracking-tight">
                Técnicas Profesionales para el Hogar
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                En CulinaryNest, eliminamos la barrera entre la alta cocina y tu
                mesa diaria. No solo compartimos recetas; enseñamos los
                "porqués" detrás de cada técnica, desde el corte preciso de un
                cuchillo hasta la química perfecta de una salsa.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Nuestra plataforma está diseñada para nutrir tu curiosidad y
                perfeccionar tus habilidades, asegurando que cada ingrediente
                brille en su máxima expresión.
              </p>
            </div>
            <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-linear-to-tr from-[#920029]/20 to-transparent"></div>
              <img
                className="w-full h-full object-cover"
                alt="Vegetales frescos y utensilios de cocina profesionales"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXKy_kntSn-74_54cBzYLGZOl6tr9Nt6-EsB6RvkmV-_eCCGE2TyqH5q44cqR8zss6wsHBgc3vp3xg6UlQxZ0afyG9-dgL_fci3oezGYZk7d0-Y5nb3qEb_laU5TOmUxKP1JqZBC5fvUMJ5ZVubmKwXPT3arEQGuXXIRL2AGnC8LpZglwjMiIulFGBXgWPB8lWG8G0EDCOTNn1fFrHwETruH-0DnJr1EeFotfUne4kiaGTn4v31AFpcyssZtwHVH49gAdwYlEsN3M"
              />
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gray-50 border-y border-gray-100">
          <div className="px-6 lg:px-10 max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
              Conoce al Equipo
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 flex flex-col md:flex-row transition-all duration-700 transform scroll-reveal">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img
                    alt="Chef profesional sonriendo en su cocina"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbcq9ayTkkBp6YZv0b02JVhfiNg5jRlHs6AgKNMw0OC_Ob3IKTwwva3q5GUB8TEb4ke5AOf2FgoZH0VhXDQ9UTn5oRmlmj6bY7abPdW1PPD7q0e7KQOB6E2wKCqstC4u35xpKdxah_OtUv5BEDla6ZyJC7tbqihscpKesouU3gj1PP3Ofa-UwG8wnKgFgi71xokgjpfda8oF37jjdWVo638-24I9Bwhgd-25qJPQE-BTw_qJ-UJVof4VnSVAEbLrmzwTIkUGyYXlU"
                  />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <span className="text-[#920029] text-xs font-bold uppercase tracking-wider mb-2">
                    Fundador & Chef Ejecutivo
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                    Chef Mateo Valdés
                  </h3>
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    "La cocina es lenguaje, y quiero que todos hablen con
                    fluidez y pasión."
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 flex flex-col md:flex-row transition-all duration-700 transform scroll-reveal">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img
                    alt="Cocinera de casa apasionada preparando masa"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdNEFyF8q-n_swvCPubSy83Rjh7-Ed7g-YHmxhtECAsLVBgGhxoFsRhIHdAvaVjHsrBlWekB5mPMuD_ThCkKj8EA7Nf1JIl1dHMBMbsTlkxaq4wEDzNcYOLHM0GSrt7FP_TtdPsaZmSHEjMcGwDVsMlFKXUy1S8NElcATt_G6t49jtFcpqOjM52rNgphGpheC3VvX95aGqNNTlF7iW10DqyWO2hhw77-FjrVBR55Omfv-fZBLlOwFAJqDf5eQc4keWMIO0fI9CJsM"
                  />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <span className="text-[#920029] text-xs font-bold uppercase tracking-wider mb-2">
                    Especialista en Cocina de Hogar
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                    Elena Martínez
                  </h3>
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    "Mi meta es transformar el caos de la cena diaria en un
                    momento de conexión familiar."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 px-6 lg:px-10 max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-[#920029] tracking-tight">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-2xl border border-gray-100 bg-white text-center hover:border-[#920029]/30 hover:shadow-sm transition-all duration-500 transform scroll-reveal">
              <div className="w-16 h-16 bg-[#920029]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-[#920029] text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  workspace_premium
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
                Calidad
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ingredientes seleccionados y procesos rigurosos para resultados
                excepcionales.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border border-gray-100 bg-white text-center hover:border-[#920029]/30 hover:shadow-sm transition-all duration-500 transform scroll-reveal">
              <div className="w-16 h-16 bg-[#920029]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-[#920029] text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  groups
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
                Comunidad
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creamos un espacio donde compartir el conocimiento es tan
                importante como el plato final.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border border-gray-100 bg-white text-center hover:border-[#920029]/30 hover:shadow-sm transition-all duration-500 transform scroll-reveal">
              <div className="w-16 h-16 bg-[#920029]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-[#920029] text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  skillet
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
                Simplicidad
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Simplificamos lo complejo sin sacrificar el sabor ni la
                elegancia.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AboutUs;

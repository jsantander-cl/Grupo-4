


function Meals() {
  const recipes = [
    {
      id: 1,
      title: "Pasta Primavera",
      rating: "4.2",
      time: "25 mins",
      difficulty: "Fácil",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPGhQpsLiuxVn3jF5cjLovqMmERKFmfX4KNEKFej0pL0qpBEzg4kN6YKdHGrCyhyBT58h8Pja3niK_ELyVMcX6RwT6UICdhsh_9sHWwRNebQ8hZtC_dHawrHn76QptruGY_XY9PPwp4sVlGTuVLiMPc0mARHrpf0YZDp9cKP7DN-bqRqZ42RvEZq5kBcbFs-eP_JG8iC5mKCozOm1yIIPcQSpRSCJCStqe0ChOEG9ml4KSXCPtGApyWNPiZmBrsi6XuADAlAGFe2I",
    },
    {
      id: 2,
      title: "Pollo al Horno",
      rating: "5.0",
      time: "55 mins",
      difficulty: "Medio",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYeh_YgQV-xKXmS89GbWzY0u7dg9AiMH8Kh8Qi3SUJtFEu8DUAe50JopOaDk_zOtq6rnJOA4I46uUb67_3jIX8lkMQTQmAyby1EcUkMsnnhjhjTQXSmN8pUsrNPafZfM47QjSgtMZZkkC1QMBX6XzVc2fvhTA9pYklPeN3oLrAfcV-mS7Ouvp3tUfQQTpgmRb20YwF4QjVyzPGDO0vR_PjZH-AREsjh_3EGVb6bprmmAD6WcP-I4U56owbelqFUQWYqt1ON-UNabI",
    },
    {
      id: 3,
      title: "Tacos de Pescado",
      rating: "4.8",
      time: "20 mins",
      difficulty: "Fácil",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB58K3TH-egpqRWNQIAjv118LUJWdKYkqKdYaWW0UFx8dBG2laGsQkdJ-z1icmLBqW7GE5s-1FSLXCXF2zQq0zbJBHQJhwZ_kZRgsyWMhNH8TQWTsxTyGjPxCX6XWa4IaUf-TXB_9wyPLrimNv_vTvr75mmjq1Bgzl2f7KODF0YMwUFrupTI5xdMoeDWZN9knj2SxSl3MvmmG2MDrFg7FLBgAjWIppd2xBhpADel77bNjoOruCEtcLL8pnEp1mIcuBYrepz_VccZNE",
    },
    {
      id: 4,
      title: "Risotto de Hongos",
      rating: "4.9",
      time: "40 mins",
      difficulty: "Difícil",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2SyLHdo2GTkbJFBC0XMaDRpe6IY6yUrGQpAIKgl7npju0ZDVbnuPPbD7562g9YRmwblY1FIAznRoBUhT0be6RSaFAdKVpNm1INxAK8Yh2deEcAPEZKRciDKIh5TjeIfRzScKosH8azhEDrwXmPaTEgBzCZPfXfBQYWbyKJjDFqvmrL5TN6e0Q6JZ90J1TblcETWsq_mPa5TvLIeOIR2lH0MXwUEAA4tdc3FwD82gwr3IEB9a5nQkVp4lQBSEfvb86dSFI9URhry8",
    },
    {
      id: 5,
      title: "Ensalada Griega",
      rating: "4.5",
      time: "15 mins",
      difficulty: "Fácil",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeqSHhFLIK-PN1C9CInFJyN0J3wXZnuACVOSRVcahJ_sgtwdTk1HNQAiCghHPvB-RShc64JSQvgI8MdwBCFHtJAj07g4Z8YODi_3SDjRmHV3_jqmOZzqveEdnpUuJENubdnFwx_HCfbUe1PpXlWhKnus6dZ9jYTcGHcbN2GJk8vey2hXXQTQdEa-Wh4XAI6MBxAe32t1C2sZpMbR90DYh5HRPXnWnQhC082-8GWZyoGNVtBNUTAG0S-IUjCUAag-wokIjPH_SKvbk",
    },
    {
      id: 6,
      title: "Brownies de Chocolate",
      rating: "5.0",
      time: "35 mins",
      difficulty: "Fácil",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAC4RpThbnviN9HUMYjgNj9QVeBE6DCZB7piBpJ8XgOkAYiMUDMFPWs1BgETFu7Vpd9PC8uC5JOrHX9H-cFY-lDXftAtiui0mONYkSvwqmN2UxwEEYLK96Y5v0VVtbh1KutbERFbAu3sFLCZQOpCQ1_qeGzi-zyfIruyYl4XWhc2KLRswrcNbhLZq-buBqZrHm8RaZUoSFVGOwIyl4hkCpmPdq_uGTSUJ9ST1gft8nNJmu_N7JJ6hgKK-_qCQ7JYe4xOq43IWKvMKQ",
    },
  ];

  return (
    <div className="bg-[#fcf9f8] min-h-screen text-[#1c1b1b]">

     

      {/* MAIN */}
      <main className="max-w-[1280px] mx-auto px-4 py-8 md:px-10">

        {/* Título de sección */}
        <section className="mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Nuestras Recetas
          </h1>
          <p className="text-[#5a4041] text-base md:text-lg max-w-2xl mx-auto md:mx-0">
            Descubre un mundo de sabores diseñados para inspirar al chef que llevas dentro.
            Recetas profesionales adaptadas para la calidez de tu hogar.
          </p>
        </section>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* SIDEBAR FILTROS */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="bg-white p-6 rounded-xl border border-[#e5e2e1] shadow-sm">

              {/* Encabezado filtros */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Filtros</h3>
                <button className="text-[#920029] text-xs font-semibold hover:underline">
                  Limpiar
                </button>
              </div>

              {/* Categorías */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-[#5a4041] uppercase tracking-wider mb-3">
                  Categorías
                </p>
                <div className="space-y-2">
                  {["Desayuno", "Almuerzo", "Cena", "Postres", "Snacks"].map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked={cat === "Almuerzo"}
                        className="w-4 h-4 rounded accent-[#920029]"
                      />
                      <span className="text-sm">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="border-[#e5e2e1] mb-6" />

              {/* Tiempo de preparación */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-[#5a4041] uppercase tracking-wider mb-3">
                  Tiempo de Prep.
                </p>
                <div className="flex flex-col gap-2">
                  {["Under 30 mins", "30-60 mins", "Over 60 mins"].map((time) => (
                    <button
                      key={time}
                      className={`text-left px-3 py-2 rounded-lg border text-xs font-semibold transition-colors ${
                        time === "30-60 mins"
                          ? "bg-[#ffdadb] border-[#b9193c] text-[#920029]"
                          : "border-[#e5e2e1] hover:border-[#920029]"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="border-[#e5e2e1] mb-6" />

              {/* Dificultad */}
              <div>
                <p className="text-xs font-semibold text-[#5a4041] uppercase tracking-wider mb-3">
                  Dificultad
                </p>
                <div className="space-y-2">
                  {["Fácil", "Medio", "Difícil"].map((diff) => (
                    <label key={diff} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="difficulty"
                        defaultChecked={diff === "Medio"}
                        className="w-4 h-4 accent-[#920029]"
                      />
                      <span className="text-sm">{diff}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* ÁREA DE RECETAS */}
          <div className="flex-grow">

            {/* Filtros activos - solo desktop */}
            <div className="hidden md:flex flex-wrap items-center gap-2 mb-6">
              {["Almuerzo", "30-60 mins", "Medio"].map((tag) => (
                <span
                  key={tag}
                  className="bg-[#ebe7e7] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2"
                >
                  {tag}
                  <span className="cursor-pointer text-[#5a4041] hover:text-[#920029]">✕</span>
                </span>
              ))}
              <p className="text-xs text-[#5a4041] ml-auto">Mostrando 24 de 152 recetas</p>
            </div>

            {/* Grid de recetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <article
                  key={recipe.id}
                  className="group bg-white rounded-xl overflow-hidden border border-[#e5e2e1] shadow-sm hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Imagen */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-[#920029] shadow-sm hover:bg-white">
                      ♡
                    </button>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    {/* Rating */}
                    <div className="flex items-center gap-1 text-[#920029] mb-2 text-sm">
                      ★★★★☆
                      <span className="text-xs text-[#5a4041] ml-1">({recipe.rating})</span>
                    </div>

                    {/* Título */}
                    <h3 className="text-base font-semibold mb-3 group-hover:text-[#920029] transition-colors">
                      {recipe.title}
                    </h3>

                    {/* Tiempo y dificultad */}
                    <div className="flex items-center justify-between text-[#5a4041] border-t border-[#e5e2e1] pt-3 text-xs font-semibold">
                      <span>⏱ {recipe.time}</span>
                      <span>🍽 {recipe.difficulty}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Paginación */}
            <div className="mt-10 flex flex-col items-center gap-4">
              <button className="px-8 py-3 bg-white border-2 border-[#920029] text-[#920029] rounded-lg text-sm font-semibold hover:bg-[#ffdadb] transition-all active:scale-95">
                Cargar más recetas
              </button>

              <div className="flex items-center gap-2 text-[#5a4041]">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#e5e2e1]">‹</button>
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-semibold ${
                      n === 1 ? "bg-[#920029] text-white" : "hover:bg-[#e5e2e1]"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <span className="px-2">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#e5e2e1] text-sm">12</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#e5e2e1]">›</button>
              </div>
            </div>

          </div>
        </div>
      </main>

    <Footer />

    </div>
  );
}

export default Meals;
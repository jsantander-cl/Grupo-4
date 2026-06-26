import { categories } from "../data/recipes";

export default function Categories() {
  return (
    <section className="py-stack-lg max-w-container-max mx-auto px-margin-desktop">
      <div className="flex justify-between items-end mb-stack-lg">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Explora por Categoría
          </h2>
          <div className="h-1 w-12 bg-primary mt-2 rounded-full"></div>
        </div>
        <a
          href="#"
          className="font-label-md text-label-md text-primary hover:underline transition-all"
        >
          Ver todas
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {categories.map((category) => (
          <a
            key={category.id}
            href="#"
            className="group relative overflow-hidden rounded-xl aspect-square recipe-card-shadow"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url('${category.image}')` }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <span className="font-headline-sm text-headline-sm">
                {category.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

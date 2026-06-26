export default function RecipeCard({ recipe }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden recipe-card-shadow flex flex-col group">
      <div className="relative overflow-hidden aspect-[16/9]">
        <img 
          src={recipe.image} 
          alt={recipe.alt}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <span 
            className="material-symbols-outlined text-primary text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            favorite
          </span>
          <span className="font-label-sm text-label-sm text-on-surface">
            {recipe.rating}
          </span>
        </div>
      </div>
      
      <div className="p-stack-md flex flex-col flex-grow">
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
          {recipe.title}
        </h3>
        <div className="flex gap-4 mt-auto">
          <div className="flex items-center gap-1 text-on-surface-variant">
            <span className="material-symbols-outlined text-base">
              schedule
            </span>
            <span className="font-label-sm text-label-sm">
              {recipe.time}
            </span>
          </div>
          <div className="flex items-center gap-1 text-on-surface-variant">
            <span className="material-symbols-outlined text-base">
              restaurant
            </span>
            <span className="font-label-sm text-label-sm">
              {recipe.difficulty}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
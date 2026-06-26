import RecipeCard from './RecipeCard';
import { featuredRecipes } from '../data/recipes';

export default function FeaturedRecipes() {
  return (
    <section className="py-stack-lg bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="text-center mb-stack-lg">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Recetas Destacadas
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Nuestras favoritas de la semana para inspirar tu menú.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}
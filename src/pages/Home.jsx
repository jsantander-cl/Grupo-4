import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedRecipes from '../components/FeaturedRecipes';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedRecipes />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
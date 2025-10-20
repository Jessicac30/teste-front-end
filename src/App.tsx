import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import Partners from './components/Partners/Partners';
import './styles/global.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Categories />
        <RelatedProducts />
        <Partners />
      </main>
    </div>
  );
}

export default App;

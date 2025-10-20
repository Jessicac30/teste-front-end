import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import Partners from './components/Partners/Partners';
import Brands from './components/Brands/Brands';
import './styles/global.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Categories />
        <RelatedProducts showAllTabs={true} />
        <Partners />
        <RelatedProducts showAllTabs={false} />
        <Partners />
        <Brands />
        <RelatedProducts showAllTabs={false} />
      </main>
    </div>
  );
}

export default App;

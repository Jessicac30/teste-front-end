import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import Partners from './components/Partners/Partners';
import Brands from './components/Brands/Brands';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
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
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;

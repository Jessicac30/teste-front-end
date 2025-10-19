import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import './styles/global.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Categories />
      </main>
    </div>
  );
}

export default App;

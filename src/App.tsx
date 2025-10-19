import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './styles/global.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;

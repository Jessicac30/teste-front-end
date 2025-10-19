import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Venha conhecer nossas<br />
            promoções
          </h1>
          <p className="hero__discount">
            <span className="hero__discount-value">50% Off</span> nos produtos
          </p>
          <button className="hero__cta">Ver produto</button>
        </div>
        <div className="hero__image">
          <img src="/src/assets/images/Rectangle 250.png" alt="Black Friday" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

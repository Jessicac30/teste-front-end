import React from 'react';
import './Brands.scss';
import econverseLogo from '../../assets/logo/econverse-logo.png';

const Brands: React.FC = () => {
  const brands = [
    { id: 1, name: 'Econverse', logo: econverseLogo },
    { id: 2, name: 'Econverse', logo: econverseLogo },
    { id: 3, name: 'Econverse', logo: econverseLogo },
    { id: 4, name: 'Econverse', logo: econverseLogo },
    { id: 5, name: 'Econverse', logo: econverseLogo },
  ];

  return (
    <section className="brands">
      <div className="brands__container">
        <h2 className="brands__title">Navegue por marcas</h2>

        <div className="brands__list">
          {brands.map((brand) => (
            <div key={brand.id} className="brands__card">
              <img src={brand.logo} alt={brand.name} className="brands__logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

import React from 'react';
import './Categories.scss';

const Categories: React.FC = () => {
  const categories = [
    { id: 1, name: 'Tecnologia', icon: '/assets/icons/categories/pc.png' },
    { id: 2, name: 'Supermercado', icon: '/assets/icons/categories/supermercados 1.png' },
    { id: 3, name: 'Bebidas', icon: '/assets/icons/categories/whiskey.png' },
    { id: 4, name: 'Ferramentas', icon: '/assets/icons/categories/ferramentas1.png' },
    { id: 5, name: 'Saúde', icon: '/assets/icons/categories/saude.png' },
    { id: 6, name: 'Esportes e Fitness', icon: '/assets/icons/categories/corrida1.png' },
    { id: 7, name: 'Moda', icon: '/assets/icons/categories/moda1.png' },
  ];

  return (
    <section className="categories">
      <div className="categories__container">
        {categories.map((category) => (
          <div key={category.id} className="categories__card">
            <div className="categories__icon-wrapper">
              <img
                src={category.icon}
                alt={category.name}
                className="categories__icon"
              />
            </div>
            <h3 className="categories__name">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;

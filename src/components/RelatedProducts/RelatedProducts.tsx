import React, { useState } from 'react';
import './RelatedProducts.scss';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  oldPrice: number;
  price: number;
  installments: number;
  installmentPrice: number;
}

const RelatedProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState('CELULAR');

  const tabs = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];

  const products: Product[] = [
    {
      id: 1,
      name: 'Produto 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/src/assets/images/celular.png',
      oldPrice: 30.90,
      price: 28.90,
      installments: 2,
      installmentPrice: 49.95,
    },
    {
      id: 2,
      name: 'Produto 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/src/assets/images/celular.png',
      oldPrice: 30.90,
      price: 28.90,
      installments: 2,
      installmentPrice: 49.95,
    },
    {
      id: 3,
      name: 'Produto 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/src/assets/images/celular.png',
      oldPrice: 30.90,
      price: 28.90,
      installments: 2,
      installmentPrice: 49.95,
    },
    {
      id: 4,
      name: 'Produto 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/src/assets/images/celular.png',
      oldPrice: 30.90,
      price: 28.90,
      installments: 2,
      installmentPrice: 49.95,
    },
  ];

  return (
    <section className="related-products">
      <div className="related-products__container">
        <div className="related-products__title-wrapper">
          <h2 className="related-products__title">Produtos relacionados</h2>
        </div>

        <div className="related-products__tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`related-products__tab ${activeTab === tab ? 'related-products__tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="related-products__carousel">
          <button className="related-products__arrow related-products__arrow--left">
            <img src="/src/assets/icons/Group2411.png" alt="Anterior" />
          </button>

          <div className="related-products__products">
            {products.map((product) => (
              <div key={product.id} className="related-products__card">
                <div className="related-products__image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="related-products__image"
                  />
                </div>

                <p className="related-products__description">{product.description}</p>

                <div className="related-products__pricing">
                  <span className="related-products__old-price">R$ {product.oldPrice.toFixed(2)}</span>
                  <span className="related-products__price">R$ {product.price.toFixed(2)}</span>
                  <span className="related-products__installments">
                    ou {product.installments}x de R$ {product.installmentPrice.toFixed(2)} sem juros
                  </span>
                  <span className="related-products__shipping">Frete grátis</span>
                </div>

                <button className="related-products__buy-button">COMPRAR</button>
              </div>
            ))}
          </div>

          <button className="related-products__arrow related-products__arrow--right">
            <img src="/src/assets/icons/Group2412.png" alt="Próximo" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;

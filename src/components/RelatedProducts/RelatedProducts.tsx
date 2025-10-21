import React, { useState, useEffect } from 'react';
import './RelatedProducts.scss';
import ProductModal from '../ProductModal/ProductModal';

interface APIProduct {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

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

interface RelatedProductsProps {
  showAllTabs?: boolean;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ showAllTabs = true }) => {
  const [activeTab, setActiveTab] = useState('CELULAR');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const tabs = showAllTabs
    ? ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS']
    : ['Ver todos'];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Usa caminho relativo - funciona tanto em dev (proxy Vite) quanto em produção (rewrite Vercel)
        const response = await fetch('/teste-front-end/junior/tecnologia/lista-produtos/produtos.json', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();

        if (data.success && data.products) {
          const formattedProducts: Product[] = data.products.map((product: APIProduct, index: number) => {
            const price = product.price / 100; // Converter centavos para reais
            const oldPrice = price * 1.1; // 10% a mais como preço antigo
            const installments = 2;
            const installmentPrice = price / installments;

            return {
              id: index + 1,
              name: product.productName,
              description: product.descriptionShort,
              image: product.photo,
              oldPrice,
              price,
              installments,
              installmentPrice,
            };
          });

          setProducts(formattedProducts);
        }
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        setError('Erro ao carregar produtos. Por favor, tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="related-products">
        <div className="related-products__container">
          <div className="related-products__title-wrapper">
            <h2 className="related-products__title">Produtos relacionados</h2>
          </div>
          <p style={{ textAlign: 'center', padding: '40px' }}>Carregando produtos...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="related-products">
        <div className="related-products__container">
          <div className="related-products__title-wrapper">
            <h2 className="related-products__title">Produtos relacionados</h2>
          </div>
          <p style={{ textAlign: 'center', padding: '40px', color: 'red' }}>{error}</p>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="related-products">
        <div className="related-products__container">
          <div className="related-products__title-wrapper">
            <h2 className="related-products__title">Produtos relacionados</h2>
          </div>
          <p style={{ textAlign: 'center', padding: '40px' }}>Nenhum produto encontrado.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="related-products">
      <div className="related-products__container">
        <div className="related-products__title-wrapper">
          <h2 className="related-products__title">Produtos relacionados</h2>
        </div>

        <div className={`related-products__tabs ${!showAllTabs ? 'related-products__tabs--single' : ''}`}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`related-products__tab ${activeTab === tab ? 'related-products__tab--active' : ''} ${!showAllTabs ? 'related-products__tab--single' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="related-products__carousel">
          <button
            className="related-products__arrow related-products__arrow--left"
            onClick={scrollLeft}
            aria-label="Produto anterior"
          >
            <img src="/assets/icons/Group2411.png" alt="Anterior" />
          </button>

          <div className="related-products__products" ref={carouselRef}>
            {products.map((product) => (
              <div
                key={product.id}
                className="related-products__card"
                onClick={() => handleProductClick(product)}
              >
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

          <button
            className="related-products__arrow related-products__arrow--right"
            onClick={scrollRight}
            aria-label="Próximo produto"
          >
            <img src="/assets/icons/Group2412.png" alt="Próximo" />
          </button>
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default RelatedProducts;

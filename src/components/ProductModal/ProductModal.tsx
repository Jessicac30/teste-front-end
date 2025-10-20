import React, { useState, useEffect } from 'react';
import './ProductModal.scss';

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

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isOpen) {
      // Rola a página para o topo quando o modal abre
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Previne scroll da página de fundo
      document.body.style.overflow = 'hidden';
    } else {
      // Restaura o scroll quando o modal fecha
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="product-modal-overlay" onClick={handleOverlayClick}>
      <div className="product-modal">
        <button className="product-modal__close" onClick={onClose} aria-label="Fechar modal">
          ×
        </button>

        <div className="product-modal__content">
          <div className="product-modal__image-section">
            <img
              src={product.image}
              alt={product.name}
              className="product-modal__image"
            />
          </div>

          <div className="product-modal__info-section">
            <h2 className="product-modal__title">{product.name}</h2>
            <p className="product-modal__price">R$ {product.price.toFixed(2).replace('.', ',')}</p>
            <p className="product-modal__description">{product.description}</p>
            <a href="#" className="product-modal__details-link">Veja mais detalhes do produto &gt;</a>

            <div className="product-modal__actions">
              <div className="product-modal__quantity">
                <button
                  className="product-modal__quantity-btn"
                  onClick={decreaseQuantity}
                  aria-label="Diminuir quantidade"
                >
                  −
                </button>
                <span className="product-modal__quantity-value">
                  {quantity.toString().padStart(2, '0')}
                </span>
                <button
                  className="product-modal__quantity-btn"
                  onClick={increaseQuantity}
                  aria-label="Aumentar quantidade"
                >
                  +
                </button>
              </div>

              <button className="product-modal__buy-button">COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__top-bar">
        <div className="header__top-info">
          <span className="header__shield">
            <img src="/assets/icons/info/ShieldCheck.png" alt="Shield" />
            Compra <span className="highlight">100% segura</span>
          </span>
          <span className="header__shipping">
            <img src="/assets/icons/info/Truck.png" alt="Truck" />
            <span className="highlight">Frete grátis</span> acima de R$ 200
          </span>
          <span className="header__installments">
            <img src="/assets/icons/info/CreditCard.png" alt="Credit Card" />
            <span className="highlight">Parcele</span> suas compras
          </span>
        </div>
      </div>

      <div className="header__main">
        <div className="header__container">
          <div className="header__logo">
            <img src="/assets/logo/econverse-logo.png" alt="Econverse" />
          </div>

          <div className="header__search">
            <input
              type="text"
              placeholder="O que você está buscando?"
              className="header__search-input"
            />
            <button className="header__search-button" aria-label="Buscar">
              <img
                src="/assets/icons/header/lupa.png"
                alt="Buscar"
                className="header__search-icon"
              />
            </button>
          </div>

          <div className="header__actions">
            <button className="header__action" aria-label="Grupo">
              <img
                src="/assets/icons/header/Group.png"
                alt="Grupo"
                className="header__icon"
              />
            </button>
            <button className="header__action" aria-label="Favoritos">
              <img
                src="/assets/icons/header/Heart.png"
                alt="Favoritos"
                className="header__icon"
              />
            </button>
            <button className="header__action" aria-label="Conta">
              <img
                src="/assets/icons/header/user.png"
                alt="Minha Conta"
                className="header__icon"
              />
            </button>
            <button className="header__action header__cart" aria-label="Carrinho">
              <img
                src="/assets/icons/header/carrinho.png"
                alt="Carrinho"
                className="header__icon"
              />
            </button>
          </div>
        </div>
      </div>

      <nav className="header__nav">
        <div className="header__container">
          <ul className="header__menu">
            <li><a href="#categorias">TODAS CATEGORIAS</a></li>
            <li><a href="#supermercado">SUPERMERCADO</a></li>
            <li><a href="#livros">LIVROS</a></li>
            <li><a href="#moda">MODA</a></li>
            <li><a href="#lancamentos">LANÇAMENTOS</a></li>
            <li><a href="#ofertas" className="header__menu-highlight">OFERTAS DO DIA</a></li>
            <li className="header__menu-badge">
              <a href="#assinatura">
                <img src="/assets/icons/info/CrownSimple.png" alt="Assinatura" />
                ASSINATURA
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

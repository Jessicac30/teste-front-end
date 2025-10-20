import React from 'react';
import './Partners.scss';
import partnerImage from '../../assets/images/partners/MaskGroup.png';

const Partners: React.FC = () => {
  return (
    <section className="partners">
      <div className="partners__container">
        <div className="partners__card" style={{ backgroundImage: `url(${partnerImage})` }}>
          <div className="partners__content">
            <h2 className="partners__title">Parceiros</h2>
            <p className="partners__description">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <button className="partners__button">CONFIRA</button>
          </div>
        </div>

        <div className="partners__card" style={{ backgroundImage: `url(${partnerImage})` }}>
          <div className="partners__content">
            <h2 className="partners__title">Parceiros</h2>
            <p className="partners__description">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <button className="partners__button">CONFIRA</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

import React from 'react';
import './Footer.scss';
import econverseLogo from '../../assets/logo/econverse-logo.png';
import instagramIcon from '../../assets/icons/social/instagram.png';
import facebookIcon from '../../assets/icons/social/facebook.png';
import linkedinIcon from '../../assets/icons/social/linkedin.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          {/* Logo e Descrição */}
          <div className="footer__brand">
            <img src={econverseLogo} alt="Econverse" className="footer__logo" />
            <p className="footer__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>

          {/* Colunas de Links */}
          <div className="footer__columns-wrapper">
            {/* Institucional */}
            <div className="footer__column">
              <h3 className="footer__column-title">Institucional</h3>
              <ul className="footer__links">
                <li><a href="#sobre">Sobre Nós</a></li>
                <li><a href="#movimento">Movimento</a></li>
                <li><a href="#trabalhe">Trabalhe conosco</a></li>
              </ul>
            </div>

            {/* Ajuda */}
            <div className="footer__column">
              <h3 className="footer__column-title">Ajuda</h3>
              <ul className="footer__links">
                <li><a href="#suporte">Suporte</a></li>
                <li><a href="#fale">Fale Conosco</a></li>
                <li><a href="#perguntas">Perguntas Frequentes</a></li>
              </ul>
            </div>

            {/* Termos */}
            <div className="footer__column">
              <h3 className="footer__column-title">Termos</h3>
              <ul className="footer__links">
                <li><a href="#termos">Termos e Condições</a></li>
                <li><a href="#privacidade">Política de Privacidade</a></li>
                <li><a href="#troca">Troca e Devolução</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

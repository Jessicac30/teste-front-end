import React, { useState } from 'react';
import './Newsletter.scss';

const Newsletter: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert('Por favor, aceite os termos e condições');
      return;
    }
    console.log('Newsletter:', { name, email });
    // Aqui poderia ser adicionada a lógica de envio
  };

  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__content">
          <h2 className="newsletter__title">Inscreva-se na nossa newsletter</h2>
          <p className="newsletter__subtitle">
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <div className="newsletter__form-wrapper">
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <div className="newsletter__inputs">
              <input
                type="text"
                placeholder="Digite seu nome"
                className="newsletter__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="newsletter__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="newsletter__button">
              INSCREVER
            </button>
          </form>

          <div className="newsletter__terms">
            <input
              type="checkbox"
              id="terms"
              className="newsletter__checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            <label htmlFor="terms" className="newsletter__terms-label">
            Aceito os termos e condições
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

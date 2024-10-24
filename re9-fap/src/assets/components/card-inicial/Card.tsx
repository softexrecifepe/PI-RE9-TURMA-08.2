import './card.css';

const Card: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Conexões que transformam</h1>
      </header>
      <div className="container-inicial">
        <section className="grid-A-iniciais">
          <article className="card-iniciais">
            <h2>Vantagens da parceria</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare ante ac tincidunt mattis. Aenean nisi erat, ultricies vitae fringilla sed, convallis pretium purus.
            </p>
          </article>
          <article className="card-iniciais">
            <h2>Dados das parcerias</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare ante ac tincidunt mattis. Aenean nisi erat, ultricies vitae fringilla sed, convallis pretium purus.
            </p>
          </article>
        </section>
        <section className="grid-B-iniciais">
          <article className="card-iniciais">
            <h2>Empresas destaque</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare ante ac tincidunt mattis. Aenean nisi erat, ultricies vitae fringilla sed, convallis pretium purus.
            </p>
          </article>
          <article className="card-iniciais">
            <h2>Instituições destaque</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare ante ac tincidunt mattis. Aenean nisi erat, ultricies vitae fringilla sed, convallis pretium purus.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Card;

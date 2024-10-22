import './card.css';

const Card: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Conexões que transformam</h1>
      </header>
      <main className="container">
        <section className="grid-A">
          <article className="card">
            <h2>Vantagens da parceria</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare ante ac tincidunt mattis. Aenean nisi erat, ultricies vitae fringilla sed, convallis pretium purus.
            </p>
          </article>
          <article className="card">
            <h2>Dados das parcerias</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare ante ac tincidunt mattis. Aenean nisi erat, ultricies vitae fringilla sed, convallis pretium purus.
            </p>
          </article>
        </section>
        <section className="grid-B">
          <article className="card">
            <h2>Destaque de algumas empresas cadastradas</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare ante ac tincidunt mattis. Aenean nisi erat, ultricies vitae fringilla sed, convallis pretium purus.
            </p>
          </article>
          <article className="card">
            <h2>Destaque de algumas instituições cadastradas</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare ante ac tincidunt mattis. Aenean nisi erat, ultricies vitae fringilla sed, convallis pretium purus.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Card;

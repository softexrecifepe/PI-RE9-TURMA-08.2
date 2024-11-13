import './card.css';

const Card: React.FC = () => {
  return (
    <div className="container-inicial">
      <article className="card-iniciais"> 
        <h2>Vantagens da parceria</h2>
        <p>Lorem ipsum dolor sit amet...</p>
      </article>
      <article className="card-iniciais"> 
        <h2>Dados das parcerias</h2>
        <p>Lorem ipsum dolor sit amet...</p>
      </article>
      <article className="card-iniciais"> 
        <h2>Empresas destaque</h2>
        <p>Lorem ipsum dolor sit amet...</p>
      </article>
      <article className="card-iniciais"> 
        <h2>Instituições destaque</h2>
        <p>Lorem ipsum dolor sit amet...</p>
      </article>
    </div>
  );
};

export default Card;

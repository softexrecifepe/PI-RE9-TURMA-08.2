import './cardcadastro.css';
import layoutcadastro from '../../img/layout-cadastro.svg';

const Cardcadastro: React.FC = () => {
  return (
    <div>
      <h1>Faça seu cadastro</h1>
      <section className="container-cadastro">
      <div className="card-cadastro">
        <div className="layout-cadastro">
        <img src= {layoutcadastro} alt="Layout"/>
        </div>
        <h1>Empresa</h1>
        <button>Clique aqui</button>
      </div>

      <div className="card-cadastro">
        <div className="layout-cadastro">
        <img src= {layoutcadastro} alt="Layout"/>
        </div>
        <h1>Instituição</h1>
        <button>Clique aqui</button>
      </div>      
      
      </section>
      
  
    </div>
  );
};

export default Cardcadastro;

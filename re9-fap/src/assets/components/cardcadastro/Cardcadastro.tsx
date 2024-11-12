import './cardcadastro.css';
import { Link } from 'react-router-dom';
import layoutcadastro from '../../img/layout-cadastro.svg';
import Button from "../buttons/Buttons";

const Cardcadastro: React.FC = () => {
  return (
    <div>
      <h1>Faça seu cadastro</h1>
      <section className="container-cadastro">
      <div className="card-cadastro">
      <div className="layout-cadastro">
        <img src= {layoutcadastro} alt="Layout"/>
        </div>
        <div className="empresa-instituicao-botao">
        <h1>Empresa</h1>
        <button className='secundary-button'><Link to={"/cadastro"}>Clique aqui</Link></button>
        </div>
      </div>

      <div className="card-cadastro">
        <div className="layout-cadastro">
        <img src= {layoutcadastro} alt="Layout"/>
        </div>
        <div className="empresa-instituicao-botao">
        <h1>Instituição</h1>
        <button className='secundary-button'><Link to={"/cadastro"}>Cadastre-se</Link></button>
        </div>
      </div>  
        
           
      
      </section>
      
  
    </div>
  );
};

export default Cardcadastro;

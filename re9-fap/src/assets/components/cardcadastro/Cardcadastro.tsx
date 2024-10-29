import './cardcadastro.css';
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
        <div className="buttons-container">
        <h1>Empresa</h1>
        <Button stylebutton="secundary-button" text="Clique Aqui"/>
        </div>
      </div>

      <div className="card-cadastro">
        <div className="layout-cadastro">
        <img src= {layoutcadastro} alt="Layout"/>
        </div>
        <div className="buttons-container">
        <h1>Instituição</h1>
        <Button stylebutton="secundary-button" text="Clique Aqui"/>
        </div>
      </div>  
        
           
      
      </section>
      
  
    </div>
  );
};

export default Cardcadastro;

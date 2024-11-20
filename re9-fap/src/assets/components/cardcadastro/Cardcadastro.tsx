import './cardcadastro.css';
import layoutcadastro from '../../img/layout-cadastroo.svg';
import Button from "../buttons/Buttons";

const Cardcadastro: React.FC = () => {
  return (
    <div className="container-cadastro">
      <div className="frase-cadastro">
        <h2>Realize seu cadastro</h2>
      </div>
      
      <div className="card-container">
        <div className="card-cadastro">
          <div className="layout-cadastro">
            <img src={layoutcadastro} alt="Layout" />
          </div>
          <div className="empresa-instituicao-botao">
            <h1>Empresa</h1>
            <Button stylebutton="secundary-button" text="Clique Aqui" />
          </div>
        </div>

        <div className="card-cadastro">
          <div className="layout-cadastro">
            <img src={layoutcadastro} alt="Layout" />
          </div>
          <div className="empresa-instituicao-botao">
            <h1>Instituição</h1>
            <Button stylebutton="secundary-button" text="Clique Aqui" />
          </div>
        </div>
      </div>
    </div>
  );
};



export default Cardcadastro;


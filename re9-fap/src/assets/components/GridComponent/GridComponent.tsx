import './GridComponent.css';

const GridComponent: React.FC = () => {
  return (
    
    <>
    <div className="teste">
    <div className="grid-container">
     {/* Coluna de retângulos */}
<div className="column rectangle-column">
  <div className="rectangle">
    <div className="center-text">iniciando o processo</div>
    <div className="arrow">→</div>
  </div>
  <div className="rectangle">
    <div className="center-text">"O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo." </div>
  </div>
  
<div className="rectangle">
  <img
    src="https://img.freepik.com/premium-photo/portrait-young-it-programmers-using-computers-while-working-software-development-office-interior-copy-space_236854-29553.jpg"
    alt="Descrição da imagem"
    className="image"
  />
</div>
</div>

      {/* Primeira coluna de quadrados */}
      <div className="column square-column">
        <div className="square">
          <span className="number">0 1</span>
          <div className="center-text">faça seu cadastro</div>
          <div className="arrow">↓</div>
        </div>
        <div className="square">
          <span className="number">02</span>
          <div className="center-text">escolha um projeto</div>
          <div className="arrow">↓</div>
        </div>
        <div className="square">
          <span className="number">03</span>
          <div className="center-text">aguarde o retorno</div>
          <div className="arrow">→</div>
        </div>
      </div>

      {/* Segunda coluna de quadrados */}
      <div className="column square-column">
        <div className="square"></div>
        <div className="square">
  <img
    src="https://img.freepik.com/premium-photo/portrait-young-it-programmers-using-computers-while-working-software-development-office-interior-copy-space_236854-29553.jpg"
    alt="Descrição da imagem"
    className="image"
  />
</div>
        <div className="square">
        <div className="center-text">parabens! agora é só da o seu melhor</div>
        </div>
      </div>
    </div>
    </div>
      </>
  );
};

export default GridComponent;




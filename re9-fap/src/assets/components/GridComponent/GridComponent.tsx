import './GridComponent.css';

const GridComponent: React.FC = () => {
  return (
    
    <>
    <div className="teste">
    <div className="grid-container">
     {/* Coluna de retângulos */}
<div className="column rectangle-column">
  <div className="rectangle">
    <div className="center-text">Texto</div>
    <div className="arrow">→</div>
  </div>
  <div className="rectangle">
    <div className="center-text">Texto 2</div>
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
          <span className="number">01</span>
          <div className="center-text">Texto</div>
          <div className="arrow">↓</div>
        </div>
        <div className="square">
          <span className="number">02</span>
          <div className="center-text">Texto</div>
          <div className="arrow">↓</div>
        </div>
        <div className="square">
          <span className="number">03</span>
          <div className="center-text">Texto</div>
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
        <div className="square"></div>
      </div>
    </div>
    </div>
      </>
  );
};

export default GridComponent;




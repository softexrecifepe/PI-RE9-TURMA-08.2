import './card-comentarios.css';

const CardComentarios: React.FC = () => {
    const cards = [
        { imgSrc: '../img/group 53.png', altText: 'imagem de comentário' },
        { imgSrc: '../img/group 53.png', altText: 'imagem de comentário 2' },
        { imgSrc: '../img/group 53.png', altText: 'imagem de comentário 3' },
        { imgSrc: '../img/group 53.png', altText: 'imagem de comentário 4' }
      ];
  
 
  return (
    <div className="home">
      <div className="container-comentarios">
        <h1>Comentários</h1>
      </div>
      <div className="wrapper-comentarios">
        {cards.map((card, index) => (
          <div className="card-coments" key={index}>
            <div className="profile-image">
              <img src={card.imgSrc} alt={card.altText} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComentarios;

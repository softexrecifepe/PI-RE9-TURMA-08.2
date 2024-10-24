import React from 'react';
import '../card-comentarios/assets/css/card-comentarios.css';

const Card: React.FC = () => {
    const cards = [
        { imgSrc: '/img/group 55.png', altText: 'imagem de comentário' },
        { imgSrc: '/img/group 53.png', altText: 'imagem de comentário 2' },
        { imgSrc: '/img/group 54.png', altText: 'imagem de comentário 3' },
        { imgSrc: '/img/group 56.png', altText: 'imagem de comentário 4' }
      ];
  
 
  return (
    <div className="home">
      <div className="container">
        <h1>Comentários</h1>
      </div>
      <div className="wrapper">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="profile-image">
              <img src={card.imgSrc} alt={card.altText} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

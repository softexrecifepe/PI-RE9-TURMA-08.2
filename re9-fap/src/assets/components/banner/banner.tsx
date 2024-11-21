import './assets/css/banner.css'; 
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Banner: React.FC = () => {
  return (
    <div className="banner-container">
      {/* Conteúdo do texto no lado esquerdo */}
      <div className="banner-content">
        <div className="logo-title-wrapper">
          {/* Se você tiver logo, descomente a linha abaixo */}
          {/* <img src={logo} alt="Logo" className="banner-logo" /> */}
          {/* <h1 className="banner-title">Re9ção</h1> */}
        </div>
        <div className="subtitle-section">
          <span className="subtitle-highlight">Soluções</span>
          <span className="subtitle-regular">Integradas</span>
        </div>
        <p className="banner-quote">
          “Unir-se é um bom começo, manter a união é um progresso, <br /> e trabalhar em conjunto é a vitória.” (Henry Ford)
        </p>
        <button className="button-learn-more">Saiba +</button>
        <div className="contact-details">
          <div className="contact-detail-item">
            <FaPhone className="contact-icon" /> (81) 99999-7890
          </div>
          <div className="contact-detail-item">
            <FaEnvelope className="contact-icon" /> re9cao@gmail.com
          </div>
        </div>
      </div>
      {/* Imagem no lado direito (não precisa de conteúdo adicional) */}
      <div className="banner-image"></div>
    </div>
  );
};

export default Banner;

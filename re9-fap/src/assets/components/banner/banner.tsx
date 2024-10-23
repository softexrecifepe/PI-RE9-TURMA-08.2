import './assets/css/banner.css'; 
import logo from '../../img/logo.svg';
import { FaPhone, FaEnvelope } from 'react-icons/fa';


const Banner: React.FC = () => {
  return (
    <div className="marketing-agency-container">
      <div className="marketing-content">
        <div className="logo-title-container">
          <img src={logo} alt="Logo" className="agency-logo" />
          <h1 className="agency-title">re9ção</h1>
        </div>
        <div className="agency-subtitle-stack">
          <span className="highlighted-text">soluções</span>
          <span>integradas</span>
        </div>
        <p className="agency-subtitle">
        “Unir-se é um bom começo, manter a união é um progresso, <br /> e trabalhar em conjunto é a vitória.” (Henry Ford)
        </p>
        <button className="learn-more-btn">saiba +</button>
        <div className="contact-info">
      <div className="contact-item">
        <FaPhone className="contact-icon" /> (81) 99999-7890
      </div>
      <div className="contact-item">
        <FaEnvelope className="contact-icon" /> re9cao@gmail.com
      </div>
     </div> 
      </div>
    </div>
  );
};

export default Banner;



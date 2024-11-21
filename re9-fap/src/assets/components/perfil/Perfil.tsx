import { FaMapMarkerAlt, FaLink, FaLinkedin } from "react-icons/fa";
import "./Perfil.css";

import selo1 from './img/image.png';
import selo2 from './img/image (1).png';
import selo3 from './img/image (2).png';

const PerfilLateral = () => {
  return (
    <div className="perfil-lateral-container">
      <div className="perfil-lateral-header">
        <img
          className="perfil-lateral-avatar"
          src="https://via.placeholder.com/150"
          alt="User Avatar"
        />
        <h2 className="perfil-lateral-nome">User Name</h2>
        <p className="perfil-lateral-username">@userhandle • they/them</p>
        <p className="perfil-lateral-bio">Default user biography text.</p>
        <button className="perfil-lateral-editar-botao">Edit profile</button>
      </div>

      <div className="perfil-lateral-detalhes">
        <div className="perfil-lateral-detalhe-item">
          <FaMapMarkerAlt className="perfil-lateral-icon" />
          <span>City, Country</span>
        </div>
        <div className="perfil-lateral-detalhe-item">
          <FaLink className="perfil-lateral-icon" />
          <a href="https://example.com" target="_blank" rel="noreferrer">
            example.com
          </a>
        </div>
        <div className="perfil-lateral-detalhe-item">
          <FaLinkedin className="perfil-lateral-icon" />
          <a href="https://linkedin.com/in/example" target="_blank" rel="noreferrer">
            linkedin.com/in/example
          </a>
        </div>
      </div>

      <div className="perfil-lateral-achievements">
        <h3>Achievements</h3>
        <div className="perfil-lateral-achievements-badges">
          <div className="selo">
            <img
              src={selo1}
              alt="Achievement 1"
              className="perfil-lateral-badge"
            />
          </div>
          <div className="selo">
            <img
              src={selo2}
              alt="Achievement 2"
              className="perfil-lateral-badge"
            />
          </div>
          <div className="selo">
            <img
              src={selo3}
              alt="Achievement 3"
              className="perfil-lateral-badge"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilLateral;

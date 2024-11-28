import { useEffect, useState } from 'react';
import { MdPhone, MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import './Perfil.css';

import selo1 from './img/image.png';
import selo2 from './img/image (1).png';
import selo3 from './img/image (2).png'

const PerfilParticipante: React.FC = () => {
    const [participante, setParticipante] = useState<any>(null);
    const navigate = useNavigate(); // Usando o hook useNavigate

    useEffect(() => {
        // Recuperando os dados do participante logado do localStorage
        const participanteLogado = localStorage.getItem('participanteLogado');
        if (participanteLogado) {
            setParticipante(JSON.parse(participanteLogado));
        }
    }, []);

    const handleLogout = () => {
        // Remover os dados do participante logado do localStorage
        localStorage.removeItem('participanteLogado');
        // Redirecionar para a página inicial
        navigate('/'); // Direciona para a home
    };

    if (!participante) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="perfil-lateral-container">
            <div className="perfil-info">
                <div className="perfil-header">
                    <h2>{participante.nome}</h2>
                    <p>CPF: {participante.cpf}</p>
                </div>

                <div className="perfil-contato">
                    <MdPhone />
                    <p>{participante.telefone}</p>
                </div>

                <div className="perfil-email">
                    <MdEmail />
                    <p>{participante.email}</p>
                </div>
            </div>

            <div className="achievements">
                <h3>Achievements</h3>
                <div className="achievements-list">
                    <img className='badge' src={selo1} alt="" />
                    <img className='badge' src={selo2} alt="" />
                    <img className='badge' src={selo3} alt="" />
                </div>
            </div>

            <button className="botao-logout" onClick={handleLogout}>
                Sair
            </button>
        </div>
    );
};

export default PerfilParticipante;

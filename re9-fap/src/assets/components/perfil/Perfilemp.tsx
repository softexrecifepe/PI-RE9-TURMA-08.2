import { useEffect, useState } from 'react';
import { MdLocationOn, MdMailOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import './Perfil.css';

import selo1 from './img/image.png';
import selo2 from './img/image (1).png';
import selo3 from './img/image (2).png';

const PerfilLateralemp: React.FC = () => {
    const [empresa, setEmpresa] = useState<any>(null);
    const navigate = useNavigate(); // Usando o hook useNavigate

    useEffect(() => {
        // Recuperando os dados da empresa do localStorage
        const empresaLogada = localStorage.getItem('empresaLogada');
        if (empresaLogada) {
            setEmpresa(JSON.parse(empresaLogada));
        }
    }, []);

    const handleLogout = () => {
        // Remover os dados da empresa logada do localStorage
        localStorage.removeItem('empresaLogada');
        // Redirecionar para a página inicial
        navigate('/'); // Direciona para a home
    };

    if (!empresa) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="perfil-lateral-container">
            <div className="perfil-info">
                <div className="perfil-header">
                    <h2>{empresa.nome}</h2>
                    <p>CNPJ: {empresa.cnpj}</p>
                </div>

                <div className="perfil-endereco">
                    <MdLocationOn />
                    <p>{empresa.endereco.rua}, {empresa.endereco.numero} - {empresa.endereco.cidade}, {empresa.endereco.estado}</p>
                </div>

                <div className="perfil-email">
                    <MdMailOutline />
                    <p>{empresa.email}</p>
                </div>
            </div>

            <div className="achievements">
                <h3>Achievements</h3>
                <div className="achievements-list">
                    <img src={selo1} className="badge" alt="selo 1"/>
                    <img src={selo2} className="badge" alt="selo 2"/>
                    <img src={selo3} className="badge" alt="selo 3"/>
                </div>
            </div>

            <button className="botao-logout" onClick={handleLogout}>
                Sair
            </button>
        </div>
    );
};

export default PerfilLateralemp;

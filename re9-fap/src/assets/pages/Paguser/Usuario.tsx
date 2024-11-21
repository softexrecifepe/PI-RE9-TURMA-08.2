import './usuario.css';
import PerfilLateral from "../../components/perfil/Perfilemp";
import Projetos from "../../components/conteudos/Projetosemp";
import PerfilParticipante from '../../components/perfil/perfiluser';

const Usuario: React.FC = () => {

    return (
        <section className="main-users-container-principal">

            <PerfilParticipante/>
            <Projetos/>
        </section>
    );
};

export default Usuario;

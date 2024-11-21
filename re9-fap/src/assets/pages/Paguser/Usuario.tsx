import { useState } from "react";
import './usuario.css';
import PerfilLateral from "../../components/perfil/Perfil";
import projetoImage from './image/projetos/gerenciamento-de-projetos.png';

const Usuario: React.FC = () => {
    const [indiceCategoriaAtual, setIndiceCategoriaAtual] = useState(0);
    const [indiceProjetoAtual, setIndiceProjetoAtual] = useState(0);

    const categorias = [
        'Desenvolvimento Web', 'Design gráfico', 'UX', 'UI design',
        'Inteligência Artificial', 'Desenvolvimento de Software', 'Dados', 
        'Robótica', 'Computação em Nuvem', 'Cybersegurança', 'Internet das Coisas'
    ];

    const projetos = Array.from({ length: 10 }, (_, index) => `Projeto ${index + 1}`);
    const categoriasVisiveis = 5;
    const projetosVisiveis = 5;

    const handleVoltarCategoria = () => {
        if (indiceCategoriaAtual > 0) {
            setIndiceCategoriaAtual(indiceCategoriaAtual - 1);
        } else {
            setIndiceCategoriaAtual(Math.floor(categorias.length / categoriasVisiveis));
        }
    };

    const handleProximoCategoria = () => {
        if (indiceCategoriaAtual < categorias.length - categoriasVisiveis) {
            setIndiceCategoriaAtual(indiceCategoriaAtual + 1);
        } else {
            setIndiceCategoriaAtual(0);
        }
    };

    const handleVoltarProjetos = () => {
        if (indiceProjetoAtual > 0) {
            setIndiceProjetoAtual(indiceProjetoAtual - 1);
        } else {
            setIndiceProjetoAtual(projetos.length - projetosVisiveis);
        }
    };

    const handleProximoProjetos = () => {
        if (indiceProjetoAtual < projetos.length - projetosVisiveis) {
            setIndiceProjetoAtual(indiceProjetoAtual + 1);
        } else {
            setIndiceProjetoAtual(0);
        }
    };

    return (
        <section className="main-users-container-principal">

            <PerfilLateral/>

            {/* INÍCIO CONTEÚDO PRINCIPAL */}
            <section className="conteudo-principal">
                {/* INÍCIO INFORMAÇÕES SOBRE O USUÁRIO */}
                <section className="usuario-texto">
                    <p className="usuario-paragrafo">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum, repellat facere aspernatur quisquam officiis? Placeat deleniti nulla fuga accusantium. Velit nemo itaque nihil mollitia eos saepe officia, natus nostrum?
                    </p>
                </section>
                {/* FIM INFORMAÇÕES SOBRE O USUÁRIO */}

                {/* INÍCIO CARROSSEL */}
                <section className="container-carrossel">
                    {/* CARROSSEL CATEGORIAS */}
                    <section className="carrossel-categorias-item">
                        <div
                            className="categorias-item"
                            style={{ transform: `translateX(-${indiceCategoriaAtual * (100 / categoriasVisiveis)}%)` }}
                        >
                            {categorias.map((categoria, index) => (
                                <button className="item" key={index} onClick={() => console.log(`Mostrar projetos para: ${categoria}`)}>
                                    {categoria}
                                </button>
                            ))}
                        </div>

                        <div className="botoes">
                            <button className="botao" id="voltar" onClick={handleVoltarCategoria}>❮</button>
                            <button className="botao" id="proximo" onClick={handleProximoCategoria}>❯</button>
                        </div>
                    </section>
                    {/* FIM CARROSSEL CATEGORIAS */}

                    {/* INÍCIO CARROSSEL2 DOS PROJETOS */}
                    <section className="container-carrossel2">
                        <section
                            className="carrossel-projetos-item"
                            style={{ transform: `translateX(-${(indiceProjetoAtual * 100) / projetosVisiveis}%)` }}
                        >
                            {projetos.map((projeto, index) => (
                                <div className="projetos-item" key={index}>
                                    <img src={projetoImage} alt={`Projeto ${index + 1}`} />
                                    <div className="conteudo">
                                        <span>{projeto}</span>
                                        <button>Saiba Mais</button>
                                    </div>
                                </div>
                            ))}
                        </section>

                        <div className="botoes">
                            <button className="botao" id="voltar2" onClick={handleVoltarProjetos}>❮</button>
                            <button className="botao" id="proximo2" onClick={handleProximoProjetos}>❯</button>
                        </div>
                    </section>
                    {/* FIM CARROSSEL2 DOS PROJETOS */}
                </section>
                {/* FIM CARROSSEL */}
            </section>
            {/* FIM CONTEÚDO PRINCIPAL */}
        </section>
    );
};

export default Usuario;

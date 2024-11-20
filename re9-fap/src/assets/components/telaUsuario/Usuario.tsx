import React, { useState } from 'react';
import './usuario.css';

import perfilImagem from './image/usuario/OIP.jpg';
import buildingIcon from './image/iconesUsuario/building.png';
import emailIcon from './image/iconesUsuario/email.png';
import linkIcon from './image/iconesUsuario/link.png';
import gitIcon from './image/iconesUsuario/github.png';
import linkedinIcon from './image/iconesUsuario/linkedin.png';
import selo1 from './image/selos/image.png';
import selo2 from './image/selos/image (1).png';
import selo3 from './image/selos/image (2).png';
import projetoImage from './image/projetos/gerenciamento-de-projetos.png';

const Usuario: React.FC = () => {
    // Estados para controle dos carrosseis
    const [indiceCategoriaAtual, setIndiceCategoriaAtual] = useState(0);
    const [indiceProjetoAtual, setIndiceProjetoAtual] = useState(0);

    // Dados
    const categorias = [
        'Desenvolvimento Web', 'Design gráfico', 'UX', 'UI design',
        'Inteligência Artificial', 'Desenvolvimento de Software', 'Dados', 
        'Robótica', 'Computação em Nuvem', 'Cybersegurança', 'Internet das Coisas'
    ];

    const projetos = Array.from({ length: 10 }, (_, index) => `Projeto ${index + 1}`);

    const categoriasVisiveis = 5;
    const projetosVisiveis = 5;

    // Funções para controle do carrossel de categorias
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

    // Funções para controle do carrossel de projetos
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
        <section className="main-container-principal">
            {/* INÍCIO PERFIL LATERAL DO USUÁRIO */}
            <section className="card-lateral">
                <div className="perfil-imagem">
                    <img className="imagem" src={perfilImagem} alt="foto-usuario" />

                    <div className="informacoes">
                        <h3 className="usuario-nome">Nome do usuário</h3>
                        <span className="usuario-user">@user</span>
                    </div>
                </div>

                <ul className="usuario-social">
                    <li className="social">
                        <img src={buildingIcon} alt="Ícone de empresa" />
                        <span>Função</span>
                    </li>
                    <li className="social">
                        <img src={emailIcon} alt="Ícone de email" />
                        <span>E-mail</span>
                    </li>
                    <li className="social">
                        <img src={linkIcon} alt="Ícone de link" />
                        <span>Link</span>
                    </li>
                    <li className="social">
                        <img src={gitIcon} alt="Ícone do GitHub" />
                        <span>Github</span>
                    </li>
                    <li className="social">
                        <img src={linkedinIcon} alt="Ícone do LinkedIn" />
                        <span>Linkedin</span>
                    </li>
                </ul>

                <div className="usuario-selo">
                    <img className="selos" src={selo1} alt="Selo 1" />
                    <img className="selos" src={selo2} alt="Selo 2" />
                    <img className="selos" src={selo3} alt="Selo 3" />
                </div>
            </section>
            {/* FIM PERFIL LATERAL DO USUÁRIO */}

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

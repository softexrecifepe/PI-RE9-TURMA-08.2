// import React from 'react';
import './usuario.css'

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
    // Função para mostrar projetos com base na categoria
    const mostrarProjetos = (categoria: string) => {
        console.log(`Mostrar projetos para a categoria: ${categoria}`);
        // Falta colocar a lógica para exibir os projetos da categoria
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
    
                <button className="botao-editar" onClick={() => {}}>Editar Perfil</button>
                
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
                        <div className="categorias-item">
                            <button className="item" onClick={() => mostrarProjetos('Desenvolvimento Web')}><a href="#"></a>Desenvolvimento Web</button>
                            <button className="item" onClick={() => mostrarProjetos('Design gráfico')}><a href="#"></a>Design gráfico</button>
                            <button className="item" onClick={() => mostrarProjetos('UX')}><a href="#"></a>UX</button>
                            <button className="item" onClick={() => mostrarProjetos('UI design')}><a href="#"></a>UI design</button>
                            <button className="item" onClick={() => mostrarProjetos('Inteligência Artificial')}><a href="#"></a>Inteligência Artificial</button>
                            <button className="item" onClick={() => mostrarProjetos('Desenvolvimento de Software')}><a href="#"></a>Desenvolvimento de Software</button>
                            <button className="item" onClick={() => mostrarProjetos('Dados')}><a href="#"></a>Dados</button>
                            <button className="item" onClick={() => mostrarProjetos('Robótica')}><a href="#"></a>Robótica</button>
                            <button className="item" onClick={() => mostrarProjetos('Computação em Nuvem')}><a href="#"></a>Computação em Nuvem</button>
                            <button className="item" onClick={() => mostrarProjetos('Cybersegurança')}><a href="#"></a>Cybersegurança</button>
                            <button className="item" onClick={() => mostrarProjetos('Internet das Coisas')}>
                            <a href="#"></a>Internet das Coisas</button>
                        </div>

                        <div className="botoes">
                            <button className="botao" id="voltar">❮</button>
                            <button className="botao" id="proximo">❯</button>
                        </div>
                    </section>
                    {/* FIM CARROSSEL CATEGORIAS */}

                    {/* INÍCIO CARROSSEL2 DOS PROJETOS */}
                    <section className="container-carrossel2">
                        <section className="carrossel-projetos-item">
                            {/* Repetição de projetos */}
                            {Array.from({ length: 10 }).map((_, index) => (
                                <div className="projetos-item" key={index}>
                                    <img src={projetoImage} alt={`Projeto ${index + 1}`} />
                                    <div className="conteudo">
                                        <span>Nome do Projeto {index + 1}</span>
                                        <button>Saiba Mais</button>
                                    </div>
                                </div>
                            ))}
                        </section>

                        <div className="botoes">
                            <button className="botao" id="voltar">❮</button>
                            <button className="botao" id="proximo">❯</button>
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
import React from 'react';
import './empresa.css'

import perfilImagem from './image/empresa/companhia.png';
import endereco from './image/iconesSocial/maps-and-flags.png';
import emailIcon from './image/iconesSocial/email.png';
import linkIcon from './image/iconesSocial/link.png';
import linkedinIcon from './image/iconesSocial/linkedin.png';

import projetoImage from './image/projetos/gerenciamento-de-projetos.png';

const Empresa: React.FC = () => {
   

    return (
        <section className="main-container-principal">
            {/* INÍCIO PERFIL LATERAL DO EMPRESA */}
            <section className="card-lateral">
                <div className="perfil-imagem">
                    <img className="imagem" src={perfilImagem} alt="foto-empresa" />
                </div>

                <div className="informacoes">
                    <h3 className="empresa-nome">Nome da empresa</h3>
                    <h4 className="empresa-user">user</h4>
                </div>

                <div className="botao-editar">
                    <button className="editar" onClick={() => {}}>Editar Perfil</button>
                </div>

                <div className="empresa-social">
                    <div className="social">
                        <img src={endereco} alt="Ícone de empresa" />
                        <span>Endereço</span>
                    </div>
                   
                    <div className="social">
                        <img src={emailIcon} alt="Ícone de email" />
                        <span>E-mail</span>
                    </div>
                    
                    <div className="social">
                        <img src={linkIcon} alt="Ícone de link" />
                        <span>Link</span>
                    </div>

                    <div className="social">
                        <img src={linkedinIcon} alt="Ícone do LinkedIn" />
                        <span>Linkedin</span>
                    </div>                    
                </div>

            </section>
            {/* FIM PERFIL LATERAL DO EMPRESA */}

            {/* INÍCIO CONTEÚDO PRINCIPAL */}
            <section className="conteudo-principal">
                {/* INÍCIO INFORMAÇÕES SOBRE O USUÁRIO */}
                <section className="empresa-texto">
                    <p className="empresa-paragrafo">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum, repellat facere aspernatur quisquam officiis? Placeat deleniti nulla fuga accusantium. Velit nemo itaque nihil mollitia eos saepe officia, natus nostrum?
                    </p>
                </section>
                {/* FIM INFORMAÇÕES SOBRE O USUÁRIO */}


                {/* INÍCIO CARROSSEL */}
                <section className="container-carrossel">
                    {/* INÍCIO CARROSSEL DOS PROJETOS */}
                    <section className="container-carrossel2">
                        <section className="carrossel-projetos-item">
                            {/* Repetição de projetos */}
                            {Array.from({ length: 10 }).map((_, index) => (
                                <div className="projetos-item" key={index}>
                                    <img src={projetoImage} alt={`Projeto ${index + 1}`} />
                                    <div className="conteudo">
                                        <h3>Nome do Projeto {index + 1}</h3>
                                        <button>Inscrições</button>
                                    </div>
                                </div>
                            ))}
                        </section>

                        <div className="botoes">
                            <button className="botao" id="voltar">❮</button>
                            <button className="botao" id="proximo">❯</button>
                        </div>
                    </section>
                    {/* FIM CARROSSEL DOS PROJETOS */}

                    <div className="inscrever-projeto">
                    <button>Inscrever novo projeto</button>
                </div> 
                </section>
                {/* FIM CARROSSEL */}
            </section>
            {/* FIM CONTEÚDO PRINCIPAL */}
        </section>
    );
};

export default Empresa;
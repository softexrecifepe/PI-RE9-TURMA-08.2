import React, {useState} from 'react';
import './empresa.css';

import perfilImagem from './image/empresa/companhia.png';
import buildingIcon from './image/iconesSocial/building.png';
import mapIcon from './image/iconesSocial/maps-and-flags.png';
import emailIcon from './image/iconesSocial/email.png';
import linkIcon from './image/iconesSocial/link.png'
import linkedinIcon from './image/iconesSocial/linkedin.png';
import projetoImage from './image/projetos/gerenciamento-de-projetos.png';

const Empresa: React.Fc = () => {
    {/**Estados para controle dos carrosseis */} 
    const [indiceCategoriaAtual, setIndiceCategoriaAtual] = useState (0);
    const [indiceProjetoAtual, setIndiceProjetoAtual] = useState (0);

    {/* DADOS */}
    const categorias = [
        'Desenvolvimento Web', 'Design gráfico', 'UX', 'UI design',
        'Inteligência Artificial', 'Desenvolvimento de Software', 'Dados', 
        'Robótica', 'Computação em Nuvem', 'Cybersegurança', 'Internet das Coisas'
    ];

    const projetos = Array.from({ length: 10 }, (_, index) => `Projeto ${index + 1}`);

    const categoriasVisiveis = 5;
    const projetosVisiveis = 5;

    {/* FUNÇÕES PARA O CARROSSEL CATEGORIAS */}
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

    {/* FUNÇÕES PARA O CARROSSEL PROJETOS*/}
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
            {/* INÍCIO PERFIL LATERAL DA EMPRESA */}
            <section className="card-lateral">
                <div className="perfil-imagem">
                    <img className="imagem" src={perfilImagem} alt="logo-empresa" />

                    <div className="informacoes">
                        <h3 className="empresa-nome">Nome da empresa</h3>
                        <span className="empresa-user">@user</span>
                    </div>
                </div>

                <ul className="empresa-social">
                    <li className="social">
                        <img src={buildingIcon} alt="incone de empresa" />
                        <span>Atuação da empresa</span>
                    </li>

                    <li className="social">
                        <img src={mapIcon} alt="incone de empresa" />
                        <span>Endereço</span>
                    </li>

                    <li className="social">
                        <img src={emailIcon} alt="incone de empresa" />
                        <span>Contato</span>
                    </li>

                    <li className="social">
                        <img src={linkIcon} alt="incone de empresa" />
                        <span>link</span>
                    </li>

                    <li className="social">
                        <img src={linkedinIcon} alt="incone de empresa" />
                        <span>Linkedin</span>
                    </li>
                </ul>

                <button className="botao-editar" onClick={() => {}}>Editar Perfil</button>
            </section>
            {/* FIM PERFIL LATERAL DA EMPRESA */}

            {/* INICIO DO CONTEÚDO PRINCIPAL */}
            <section className="conteudo-principal">
                {/* INÍCIO INFORMAÇÕES SOBRE A EMPRESA */}
                <section className="empresa-texto">
                    <p className="empresa-paragrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo hic fugit rem deleniti? Culpa optio alias aspernatur architecto molestias, adipisci veniam enim doloremque, iusto odit deserunt magni recusandae ab.</p>
                </section>
                {/* FIM INFORMAÇÕES SOBRE A EMPRESA */}

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
                        <section className="carrossel-projetos-item" style={{ transform: `translateX(-${(indiceProjetoAtual * 100) / projetosVisiveis}%)` }}>
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
             {/* FIM DO CONTEÚDO PRINCIPAL */}        
        </section>
    )
}

export default Empresa; 


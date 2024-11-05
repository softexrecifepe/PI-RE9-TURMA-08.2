import './cadastros.css'
import { useState } from 'react';
import { FaCheck, FaRegBuilding } from "react-icons/fa";
import { MdMailOutline, MdOutlinePassword } from "react-icons/md";
import * as React from 'react';


function CadastroEmpresa() {

    const [info, setInfo] = useState({})

    const atualizarinfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInfo(
            {   
                ...info,
                [e.target.name]: e.target.value
            }
        )
    }

    return(
        <>
        <section className="cadastro-aluno-section">
            <div className='container-titulo-subtitulo-cadastro'>
                <h1 className="titulo-formulario-cadastro">Cadastro</h1>
                <h3 className="subtitulo-formulario-cadastro">Empresa</h3>
            </div>

            <form autoComplete='email' className='container-inputs-cadastro'>

                <div className='conatiner-input-icon'>
                <div>
                    <p>Nome da empresa</p>
                    <input name='nome' onChange={atualizarinfo} className='input-component' placeholder="Digite o nome da empresa" type="text"/>
                </div>
                    <FaRegBuilding />
                </div>
                <div className='conatiner-input-icon'>
                    <div>
                        <p>CNPJ</p>
                        <input name='cnpj' onChange={atualizarinfo} className='input-component' placeholder="Digite o CNPJ da empresa" type="text"/>
                    </div>
                    <FaCheck/>
                </div>

                <div className='conatiner-input-icon'>
                    <div>
                        <p>E-mail</p>
                        <input name='email' onChange={atualizarinfo} className='input-component' placeholder="Digite seu email institucional" type="email"/>
                    </div>
                    <MdMailOutline />
                </div>

                <div className='conatiner-input-icon'>
                    <div>
                        <p>Senha</p>
                        <input name='senha' onChange={atualizarinfo} className='input-component' placeholder="Digite sua senha" type="password"/>
                    </div>
                    <MdOutlinePassword />
                </div>

                <button className='secundary-button botao-formulario-cadastro'>Cadastre-se</button>
            </form>

        </section>
        </>
    )
}

export default CadastroEmpresa;
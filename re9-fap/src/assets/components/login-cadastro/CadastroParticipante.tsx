import './cadastros.css'
import { useState } from 'react';
import { FaRegUser, FaCheck} from "react-icons/fa";
import { MdMailOutline, MdOutlinePassword } from "react-icons/md";


function CadastroParticipante() {

    const [info, setInfo] = useState({})
    const [finalizado, setFinalizado] = useState(false)

    const atualizarinfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInfo(
            {   
                ...info,
                [e.target.name]: e.target.value
            }
        )

        if (Object.keys(info).length === 4) {
            setFinalizado(true)
        }
    }

    return(
        <>
        <section className="cadastro-aluno-section">
            <div className='container-titulo-subtitulo-cadastro'>
                <h1 className="titulo-formulario-cadastro">Cadastro</h1>
                <h3 className="subtitulo-formulario-cadastro">Participante</h3>
            </div>

            <form autoComplete='email' className='container-inputs-cadastro'>

                <div className='conatiner-input-icon'>
                <div>
                    <p>Nome</p>
                    <input name='nome' onChange={atualizarinfo} className='input-component' placeholder="Digite seu nome" type="text"/>
                </div>
                    <FaRegUser/>
                </div>
                <div className='conatiner-input-icon'>
                <div>
                    <p>CPF</p>
                    <input name='cpf' onChange={atualizarinfo} className='input-component' placeholder="Digite seu cpf" type="text"/>
                </div>
                    <FaCheck/>
                </div>

                <div className='conatiner-input-icon'>
                    <div>
                        <p>E-mail</p>
                        <input name='email' onChange={atualizarinfo} className='input-component' placeholder="Digite seu email" type="email"/>
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

                <button disabled={
                    finalizado === false
                } className='secundary-button botao-formulario-cadastro'>Cadastre-se</button>
            </form>

        </section>
        </>
    )
}

export default CadastroParticipante;
import './cadastros.css'
import { useState } from 'react';
import { FaRegUser, FaCheck} from "react-icons/fa";
import { MdMailOutline, MdOutlinePassword } from "react-icons/md";
// import validarcpf from './validarcpf';


function CadastroParticipante() {

    const [info, setInfo] = useState({})
    const [finalizado, setFinalizado] = useState(false)

    const formatarcpf = (cpf:string) => {
        const cpf_formatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
    (match, argumento1, argumento2, argumento3, argumento4) => {
      return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
    }
  );

        setInfo({
            ...info,
            cpf: cpf_formatado
        })
        

        if (Object.keys(info).length === 4) {
            setFinalizado(true)
        }
        
    }

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const inputCPF = document.getElementById("cpf") as HTMLInputElement
        const cpf = inputCPF.value
        formatarcpf(cpf)
        console.log(info)
    }


    return(
        <>
        <section className="cadastro-aluno-section">
            <div className='container-titulo-subtitulo-cadastro'>
                <h1 className="titulo-formulario-cadastro">Cadastro</h1>
                <h3 className="subtitulo-formulario-cadastro">Participante</h3>
            </div>

            <form autoComplete='email' method='get' onSubmit={handleSubmit} className='container-inputs-cadastro'>

                <div className='conatiner-input-icon'>
                <div>
                    <p>Nome</p>
                    <input name='nome' onChange={atualizarinfo} className='input-component' placeholder="Digite seu nome" type="text"/>
                </div>
                    <FaRegUser/>
                </div>
                <div className='conatiner-input-icon'>
                    <div>
                        <p>CPF (apenas números)</p>
                        <input maxLength={11} name='cpf' id='cpf' onChange={atualizarinfo} className='input-component' placeholder="Digite seu cpf" type="text" pattern='[0-9]{11}'/>
                    </div>
                    <FaCheck/>
                </div>
                <p id='cpf-invalido' style={{display: 'none'}}>CPF inválido</p>
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

                <p style={{display:'none'}} id='preencha-todos-os-campos'>Preencha todos os campos para prosseguir!</p>
                

                <button disabled={
                    finalizado === false
                } className='secundary-button botao-formulario-cadastro'>Cadastre-se</button>
            </form>

        </section>
        </>
    )
}

export default CadastroParticipante;
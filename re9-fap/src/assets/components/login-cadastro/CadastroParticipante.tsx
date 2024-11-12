import './cadastros.css'
import { useEffect, useState } from 'react';
import { FaRegUser, FaCheck} from "react-icons/fa";
import { MdMailOutline, MdOutlinePassword } from "react-icons/md";
// import validarcpf from './validarcpf';


function CadastroParticipante() {

    const [info, setInfo] = useState({
        nome: '',
        cpf: '',
        email: '',
        senha: ''
    })

    const [finalizado, setFinalizado] = useState(false)

    const formatarcpf = (cpf:string) => {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    const atualizarinfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setInfo((prevInfo)=>({
            ...prevInfo,
            [name]: name === 'cpf' ? formatarcpf(value.replace(/\D/g, '')) : value
        }))
    }

    useEffect(()=>{
        const isComplet = Object.values(info).every((val) => val.trim() !== '')
        setFinalizado(isComplet);
    }, [info])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!finalizado) {
            alert('Preencha o todos os campos para prosseguir')
            return;
        }

        console.log('informações passadas:' + info.cpf)
    }


    return(
        <>
        <section className="cadastro-aluno-section">
            <div className='container-titulo-subtitulo-cadastro'>
                <h1 className="titulo-formulario-cadastro">Cadastro</h1>
                <h3 className="subtitulo-formulario-cadastro">Participante</h3>
            </div>

            <form onSubmit={handleSubmit} className='container-inputs-cadastro'>

                <div className='conatiner-input-icon'>
                <div>
                    <p>Nome</p>
                    <input name='nome' autoComplete='no' onChange={atualizarinfo} className='input-component' placeholder="Digite seu nome" type="text"/>
                </div>
                    <FaRegUser/>
                </div>
                <div className='conatiner-input-icon'>
                    <div>
                        <p>CPF (apenas números)</p>
                        <input maxLength={11} autoComplete='no' name='cpf' id='cpf' onChange={atualizarinfo} className='input-component' placeholder="Digite seu cpf" type="text" pattern='[0-9]{11}'/>
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

                <button className='secundary-button botao-formulario-cadastro'>Cadastre-se</button>
            </form>

        </section>
        </>
    )
}

export default CadastroParticipante;
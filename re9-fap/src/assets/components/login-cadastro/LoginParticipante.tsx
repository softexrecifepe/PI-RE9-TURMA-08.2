import './cadastros.css'
import { MdMailOutline, MdOutlinePassword } from "react-icons/md";
import { useEffect, useState } from 'react';


function LoginParticipante() {

    const [info, setInfo] = useState({
        email:'',
        senha:''
    })
    const [finalizado, setFinalizado] = useState(false)

    const atualizarInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setInfo((previnfo) => ({
            ...previnfo,
            [name]: value
        }))
    }

    useEffect(() => {
        const isComplet = Object.values(info).every((val) => val.trim() !== '')
        setFinalizado(isComplet)
    }, [info])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!finalizado) {
            alert("Preencha todos os campos para prosseguir")
            return;
        }

        console.log('informações passadas: ' + info.email)
    }

    return(
        <>
        <section className="cadastro-aluno-section">
            <div className='container-titulo-subtitulo-cadastro'>
                <h1 className="titulo-formulario-cadastro">Login</h1>
                <h3 className="subtitulo-formulario-cadastro">Participante</h3>
            </div>

            <form autoComplete='email' onSubmit={handleSubmit} className='container-inputs-cadastro'>

                <div className='conatiner-input-icon'>
                    <div>
                        <p>E-mail</p>
                        <input name='email' onChange={atualizarInfo} className='input-component' placeholder="digite seu email" type="email"/>
                    </div>
                    <MdMailOutline />
                </div>

                <div className='conatiner-input-icon'>
                    <div>
                        <p>Senha</p>
                        <input name='senha' onChange={atualizarInfo} className='input-component' placeholder="digite sua senha" type="password"/>
                    </div>
                    <MdOutlinePassword />
                </div>

                <button className='secundary-button botao-formulario-cadastro'>Entrar</button>
            </form>

        </section>
        </>
    )
}

export default LoginParticipante;
import '../login-cadastro/cadastros.css'
import { MdMailOutline, MdOutlinePassword } from "react-icons/md";
import { useEffect, useState } from 'react';
import * as React from 'react';


function Cadprojeto() {

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
                <h1 className="titulo-formulario-cadastro">Novo Projeto</h1>
            </div>

            <form autoComplete='email' onSubmit={handleSubmit} className='container-inputs-cadastro'>

                <div className='conatiner-input-icon'>
                    <div>
                        <p>Nome do projeto</p>
                        <input name='nome' autoComplete='no' onChange={atualizarInfo} className='input-component' placeholder="digite o nome do projeto" type="text"/>
                    </div>
                    <MdMailOutline />
                </div>

                <div className='conatiner-input-icon'>
                    <div>
                        <p>Descrição do projeto</p>
                        <input name='descricao' onChange={atualizarInfo} className='input-component' placeholder="digite a descrição" type="text"/>
                    </div>
                    <MdOutlinePassword />
                </div>


                <button className='secundary-button botao-formulario-cadastro'>Entrar</button>
            </form>

        </section>
        </>
    )
}

export default Cadprojeto;
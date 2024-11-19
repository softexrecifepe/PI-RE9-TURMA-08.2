import './cadastros.css'
import { useEffect, useState } from 'react';
import { FaCheck, FaRegBuilding } from "react-icons/fa";
import { MdLocationOn, MdMailOutline, MdOutlinePassword } from "react-icons/md";
import * as React from 'react';

function CadastroEmpresa() {

    const [info, setInfo] = useState({
        nome: '',
        cnpj: '',
        email: '',
        senha: ''
    })

    const [finalizado, setFinalizado] = useState(false)

    const formatarCNPJ = (cnpj: string) => {
        return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    };

    const atualizarinfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setInfo((previnfo) => ({
            ...previnfo,
            [name]: name === 'cnpj' ? formatarCNPJ(value.replace(/\D/g, '')) : value
        }))
    }

    // useEffect(() => {
    //     const isComplet = Object.values(info).every((val) => val.trim() !== '')
    //     setFinalizado(isComplet)
    // }, [info])
    const isComplet = Object.values(info).every((val) => val.trim() !== '')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!isComplet) {
            alert("preencha todos os campos para prosseguir")
            return;
        }

        console.log('Informações enviadas: ' + info.cnpj)
    }

    return (
        <>
            <section className="cadastro-aluno-section">
                <div className='container-titulo-subtitulo-cadastro'>
                    <h1 className="titulo-formulario-cadastro">Cadastro</h1>
                    <h3 className="subtitulo-formulario-cadastro">Empresa</h3>
                </div>

                <form onSubmit={handleSubmit}
                    className='container-inputs-cadastro'>

                    <div className='conatiner-input-icon'>
                        <div>
                            <p>Nome da empresa</p>
                            <input autoComplete='no'
                                name='nome' onChange={atualizarinfo} className='input-component' placeholder="Digite o nome da empresa" type="text" />
                        </div>
                        <FaRegBuilding />
                    </div>
                    <div className='conatiner-input-icon'>
                        <div>
                            <p>CEP</p>
                            <input autoComplete='no'
                                name='cep' onChange={atualizarinfo} className='input-component' placeholder="Digite o cep da empresa" type="text" />
                        </div>
                        <MdLocationOn />
                    </div>
                    <div className='conatiner-input-icon'>
                        <div>
                            <p>CNPJ (apenas números)</p>
                            <input autoComplete='no' pattern='[0-9]{14}' maxLength={14}
                                name='cnpj' onChange={atualizarinfo} className='input-component' placeholder="Digite o CNPJ da empresa" type="text" />
                        </div>
                        <FaCheck />
                    </div>

                    <div className='conatiner-input-icon'>
                        <div>
                            <p>E-mail</p>
                            <input name='email' onChange={atualizarinfo} className='input-component' placeholder="Digite seu email institucional" type="email" />
                        </div>
                        <MdMailOutline />
                    </div>

                    <div className='conatiner-input-icon'>
                        <div>
                            <p>Senha</p>
                            <input name='senha' onChange={atualizarinfo} className='input-component' placeholder="Digite sua senha" type="password" />
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
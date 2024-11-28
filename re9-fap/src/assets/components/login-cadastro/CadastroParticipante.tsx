import './cadastros.css';
import { useState } from 'react';
import { FaPhone, FaRegUser, FaCheck } from "react-icons/fa";
import { MdMailOutline, MdOutlinePassword } from "react-icons/md";
import axios from 'axios';

function CadastroParticipante() {
    const [info, setInfo] = useState({
        nome: '',
        telefone: '',
        cpf: '',
        email: '',
        senha: '',
        escolaridade: '' 
    });

    const formatarcpf = (cpf: string) => {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    };

    const atualizarinfo = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value
        }));
    };

    const isComplet = Object.values(info).every((val) => val.trim() !== '');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isComplet) {
            alert('Preencha todos os campos para prosseguir');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/participantes', info);
            alert("Cadastro realizado com sucesso!");
            console.log('Resposta do servidor:', response.data);
            setInfo({
                nome: '',
                telefone: '',
                cpf: '',
                email: '',
                senha: '',
                escolaridade: '' 
            });
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
            alert('Erro ao cadastrar. Tente novamente mais tarde.');
        }
    };

    return (
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
                            <input name='nome' autoComplete='no' onChange={atualizarinfo} className='input-component' placeholder="Digite seu nome" value={info.nome} type="text" />
                        </div>
                        <FaRegUser />
                    </div>
                    <div className='conatiner-input-icon'>
                        <div>
                            <p>Telefone (apenas números)</p>
                            <input name='telefone' autoComplete='no' onChange={atualizarinfo} value={info.telefone}className='input-component' placeholder="EX: 81999999999" pattern='[0-9]{11}' maxLength={11} type="text" />
                        </div>
                        <FaPhone />
                    </div>

                    <div className='double-inputs-line'>
                        <div className='conatiner-input-icon'>
                            <div>
                                <p>CPF (apenas números)</p>
                                <input maxLength={11} value={info.cpf} autoComplete='no' name='cpf' id='cpf' onChange={atualizarinfo} className='input-component' placeholder="Digite seu CPF" type="text" pattern='[0-9]{11}' />
                            </div>
                            <FaCheck />
                        </div>
                        <div className='conatiner-input-icon'>
                            <div>
                                <p>Nível de Escolaridade</p>
                                <select name='escolaridade' onChange={atualizarinfo} value={info.escolaridade} className='input-component'>
                                    <option value="">Selecione sua escolaridade</option>
                                    <option value="Ensino Fundamental">Ensino Fundamental</option>
                                    <option value="Ensino Médio">Ensino Médio</option>
                                    <option value="Ensino Técnico">Ensino Técnico</option>
                                    <option value="Ensino Superior">Ensino Superior</option>
                                    <option value="Pós-graduação">Pós-graduação</option>
                                    <option value="Mestrado/Doutorado">Mestrado/Doutorado</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='conatiner-input-icon'>
                        <div>
                            <p>E-mail</p>
                            <input name='email' value={info.email} onChange={atualizarinfo} className='input-component' placeholder="Digite seu email" type="email" />
                        </div>
                        <MdMailOutline />
                    </div>

                    <div className='conatiner-input-icon'>
                        <div>
                            <p>Senha</p>
                            <input name='senha' value={info.senha} onChange={atualizarinfo} className='input-component' placeholder="Digite sua senha" type="password" />
                        </div>
                        <MdOutlinePassword />
                    </div>

                    <button className='secundary-button botao-formulario-cadastro'>Cadastre-se</button>
                </form>
            </section>
        </>
    );
}

export default CadastroParticipante;

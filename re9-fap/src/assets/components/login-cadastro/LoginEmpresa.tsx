import './cadastros.css';
import { MdMailOutline, MdOutlinePassword } from "react-icons/md";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Usando useNavigate para redirecionamento
import axios from 'axios';

function LoginEmpresa() {
    const [info, setInfo] = useState({
        email: '',
        senha: ''
    });
    const [finalizado, setFinalizado] = useState(false);
    const [erro, setErro] = useState('');
    const navigate = useNavigate(); // Usando o hook useNavigate

    const atualizarInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInfo((previnfo) => ({
            ...previnfo,
            [name]: value
        }));
    };

    useEffect(() => {
        const isComplet = Object.values(info).every((val) => val.trim() !== '');
        setFinalizado(isComplet);
    }, [info]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!finalizado) {
            alert("Preencha todos os campos para prosseguir");
            return;
        }

        try {
            // Requisição ao json-server para buscar as empresas com o mesmo e-mail e senha
            const response = await axios.get('http://localhost:3000/empresas', {
                params: {
                    email: info.email,
                    senha: info.senha
                }
            });

            // Verificando se a empresa foi encontrada
            if (response.data.length > 0) {
                // Armazenando os dados da empresa no localStorage
                localStorage.setItem('empresaLogada', JSON.stringify(response.data[0]));
                // Login bem-sucedido, redirecionar para a página de perfil
                navigate('/pagempresa'); // Usando navigate para redirecionar
            } else {
                setErro('Email ou senha incorretos');
            }
        } catch (error) {
            setErro('Erro ao tentar realizar o login');
        }
    };

    return (
        <section className="cadastro-aluno-section">
            <div className="container-titulo-subtitulo-cadastro">
                <h1 className="titulo-formulario-cadastro">Login</h1>
                <h3 className="subtitulo-formulario-cadastro">Empresa</h3>
            </div>

            <form autoComplete="email" onSubmit={handleSubmit} className="container-inputs-cadastro">
                <div className="conatiner-input-icon">
                    <div>
                        <p>E-mail</p>
                        <input
                            name="email"
                            onChange={atualizarInfo}
                            className="input-component"
                            placeholder="email da empresa"
                            type="email"
                        />
                    </div>
                    <MdMailOutline />
                </div>

                <div className="conatiner-input-icon">
                    <div>
                        <p>Senha</p>
                        <input
                            name="senha"
                            onChange={atualizarInfo}
                            className="input-component"
                            placeholder="digite sua senha"
                            type="password"
                        />
                    </div>
                    <MdOutlinePassword />
                </div>

                <button className="secundary-button botao-formulario-cadastro" type="submit">
                    Entrar
                </button>
            </form>

            {erro && <p className="erro-login">{erro}</p>}
        </section>
    );
}

export default LoginEmpresa;

import '../login-cadastro/cadastros.css';
import './cadprojeto.css';
import { MdOutlineDescription, MdDriveFileRenameOutline } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { useEffect, useState } from 'react';
import * as React from 'react';

function Cadprojeto() {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const [info, setInfo] = useState({
        nome: '',
        descricao: '',
        participantes: [] as string[], // Inicializamos participantes como um array vazio.
    });

    const [finalizado, setFinalizado] = useState(false);

    const atualizarInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;

        // Atualizando selectedItems com base no estado atual
        setSelectedItems((prevItems) => {
            const updatedItems = checked
                ? [...prevItems, value] // Adiciona se marcado
                : prevItems.filter((item) => item !== value); // Remove se desmarcado

            // Atualizar o estado info com os participantes
            setInfo((prevInfo) => ({
                ...prevInfo,
                participantes: updatedItems,
            }));

            return updatedItems;
        });
    };

    useEffect(() => {
        // Verifica se todos os campos obrigatórios estão preenchidos
        const isComplet = info.nome.trim() !== '' && info.descricao.trim() !== '' && info.participantes.length > 0;
        setFinalizado(isComplet);
    }, [info]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!finalizado) {
            alert("Preencha todos os campos para prosseguir");
            return;
        }

        console.log('Informações enviadas:', info);
    };

    return (
        <>
            <section className="cadastro-aluno-section">
                <div className='container-titulo-subtitulo-cadastro'>
                    <h1 className="titulo-formulario-cadastro">Novo Projeto</h1>
                </div>

                <form autoComplete='off' onSubmit={handleSubmit} className='container-inputs-cadastro'>
                    <div className='conatiner-input-icon'>
                        <div>
                            <p>Nome do projeto</p>
                            <input
                                name='nome'
                                onChange={atualizarInfo}
                                className='input-component'
                                placeholder="Digite o nome do projeto"
                                type="text"
                            />
                        </div>
                        <MdDriveFileRenameOutline />
                    </div>

                    <div className='conatiner-input-icon'>
                        <div>
                            <p>Descrição do projeto</p>
                            <input
                                name='descricao'
                                onChange={atualizarInfo}
                                className='input-component'
                                placeholder="Digite a descrição"
                                type="text"
                            />
                        </div>
                        <MdOutlineDescription />
                    </div>

                    <div className='conatiner-input-icon'>
                        <div>
                            <p>Quem pode participar?</p>
                            <div className='container-agentespermitidos'>
                                <ul>
                                    <li>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="mentor"
                                                onChange={handleCheckboxChange}
                                                checked={selectedItems.includes("mentor")}
                                            />
                                            Mentor
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="graduando"
                                                onChange={handleCheckboxChange}
                                                checked={selectedItems.includes("graduando")}
                                            />
                                            Graduando
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="professor"
                                                onChange={handleCheckboxChange}
                                                checked={selectedItems.includes("professor")}
                                            />
                                            Professor
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="graduados"
                                                onChange={handleCheckboxChange}
                                                checked={selectedItems.includes("graduados")}
                                            />
                                            Graduados
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="pos-graduados"
                                                onChange={handleCheckboxChange}
                                                checked={selectedItems.includes("pos-graduados")}
                                            />
                                            Pós-Graduados
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="especialistas"
                                                onChange={handleCheckboxChange}
                                                checked={selectedItems.includes("especialistas")}
                                            />
                                            Especialistas na área do projeto
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <FaUsers />
                    </div>

                    <button
                        className='secundary-button botao-formulario-cadastro'
                        disabled={!finalizado} // Botão desabilitado se os campos não estiverem preenchidos
                    >
                        Criar
                    </button>
                </form>
            </section>
        </>
    );
}

export default Cadprojeto;

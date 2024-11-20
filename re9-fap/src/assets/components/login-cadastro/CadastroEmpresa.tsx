import './cadastros.css'
import { useState } from 'react';
import { FaCheck, FaRegBuilding } from "react-icons/fa";
import { MdLocationOn, MdMailOutline, MdOutlinePassword } from "react-icons/md";
import * as React from 'react';
import axios from 'axios';


function CadastroEmpresa() {

    const [info, setInfo] = useState({
        nome: '',
        cep: '',
        cnpj: '',
        email: '',
        senha: ''
    })

    const buscarEndereco = async (cep:any) => {
        try {
          const response = await axios.get(`https://cep.awesomeapi.com.br/json/${Number(cep)}`);
          return response.data;
        } catch (error) {
          console.error('Erro ao buscar o endereço:', error);
          return null;
        }
      };

    const atualizarinfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setInfo((previnfo) => ({
            ...previnfo,
            [name]: value
        }))
    }

    const isComplet = Object.values(info).every((val) => val.trim() !== '')

    const handleSubmit = async (e:any) => {
        e.preventDefault();
      
        if (!isComplet) {
          alert("Preencha todos os campos para prosseguir.");
          return;
        }
      
        try {
          // Buscar o endereço usando o CEP
          const endereco = await buscarEndereco(info.cep);
      
          if (!endereco) {
            alert('CEP inválido ou não encontrado.');
            return;
          }
      
          const dadosCadastro = {
            ...info,
            endereco: {
              rua: endereco.address_name, 
              numero: '', 
              cidade: endereco.city,
              estado: endereco.state,
              pais: 'Brasil', 
              latitude: endereco.lat,
              longitude: endereco.lng
            }
          };
      
          // Enviar o POST para o JSON Server
          const response = await axios.post('http://localhost:3000/empresas', dadosCadastro);
          alert('Empresa cadastrada com sucesso!');
          console.log('Resposta do servidor:', response.data);
          setInfo({
            nome: '',
            cep: '',
            cnpj: '',
            email: '',
            senha: ''
          });
        } catch (error) {
          console.error('Erro ao enviar os dados:', error);
          alert('Erro ao cadastrar a empresa. Tente novamente mais tarde.');
        }
      };
      

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
                                name='nome' value={info.nome} onChange={atualizarinfo} className='input-component' placeholder="Digite o nome da empresa" type="text" />
                        </div>
                        <FaRegBuilding />
                    </div>
                    <div className='conatiner-input-icon'>
                        <div>
                            <p>CEP (apenas números)</p>
                            <input autoComplete='no'
                                name='cep' value={info.cep} onChange={atualizarinfo} pattern='[0-9]{8}' maxLength={8} className='input-component' placeholder="Digite o cep da empresa" type="text" />
                        </div>
                        <MdLocationOn />
                    </div>
                    <div className='conatiner-input-icon'>
                        <div>
                            <p>CNPJ (apenas números)</p>
                            <input autoComplete='no' pattern='[0-9]{14}' maxLength={14}
                                name='cnpj' value={info.cnpj} onChange={atualizarinfo} className='input-component' placeholder="Digite o CNPJ da empresa" type="text" />
                        </div>
                        <FaCheck />
                    </div>

                    <div className='conatiner-input-icon'>
                        <div>
                            <p>E-mail</p>
                            <input name='email' value={info.email} onChange={atualizarinfo} className='input-component' placeholder="Digite seu email institucional" type="email" />
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
    )
}

export default CadastroEmpresa;
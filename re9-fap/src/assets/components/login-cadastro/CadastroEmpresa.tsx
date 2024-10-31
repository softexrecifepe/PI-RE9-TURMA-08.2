import './cadastros.css'
import Input from "../inputs/Input";
import { FaCheck, FaRegBuilding } from "react-icons/fa";
import { MdMailOutline, MdOutlinePassword } from "react-icons/md";


function CadastroEmpresa() {
    return(
        <>
        <section className="cadastro-aluno-section">
            <div className='container-titulo-subtitulo-cadastro'>
                <h1 className="titulo-formulario-cadastro">Cadastro</h1>
                <h3 className="subtitulo-formulario-cadastro">Empresa</h3>
            </div>

            <form autoComplete='email' className='container-inputs-cadastro'>

                <div className='conatiner-input-icon'>
                    <Input titulo="Nome da empresa" placeholder="Digite o nome da empresa" type="text"/><FaRegBuilding />
                </div>
                <div className='conatiner-input-icon'>
                    <Input titulo="CNPJ" placeholder="Digite o CNPJ da empresa" type="text"/><FaCheck/>
                </div>

                <div className='conatiner-input-icon'>
                    <Input titulo="E-mail" placeholder="Digite seu Email" type="email"/><MdMailOutline />
                </div>

                <div className='conatiner-input-icon'>
                    <Input titulo="Senha" placeholder="Digite sua senha" type="password"/><MdOutlinePassword />
                </div>

                <button className='secundary-button botao-formulario-cadastro'>Cadastre-se</button>
            </form>

        </section>
        </>
    )
}

export default CadastroEmpresa;
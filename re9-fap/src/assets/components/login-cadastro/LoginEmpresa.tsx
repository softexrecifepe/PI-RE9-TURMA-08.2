import './cadastros.css'
import Input from "../inputs/Input";
import { MdMailOutline, MdOutlinePassword } from "react-icons/md";


function LoginEmpresa() {
    return(
        <>
        <section className="cadastro-aluno-section">
            <div className='container-titulo-subtitulo-cadastro'>
                <h1 className="titulo-formulario-cadastro">Login</h1>
                <h3 className="subtitulo-formulario-cadastro">Empresa</h3>
            </div>

            <form autoComplete='email' className='container-inputs-cadastro'>

                <div className='conatiner-input-icon'>
                    <Input titulo="E-mail" placeholder="Digite seu Email" type="email"/><MdMailOutline />
                </div>

                <div className='conatiner-input-icon'>
                    <Input titulo="Senha" placeholder="Digite sua senha" type="password"/><MdOutlinePassword />
                </div>

                <button className='secundary-button botao-formulario-cadastro'>Entrar</button>
            </form>

        </section>
        </>
    )
}

export default LoginEmpresa;
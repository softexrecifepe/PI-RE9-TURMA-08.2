import '../components/login-cadastro/pagcadastro.css'
import { useState } from 'react';
import AlunoInstituicao from "../components/login-cadastro/AlunoInstituicao";
import LoginEmpresa from '../components/login-cadastro/LoginEmpresa';
import LoginParticipante from '../components/login-cadastro/LoginParticipante';
import Arvore from '../components/login-cadastro/Arvore';

function PagLogin() {
    
    const [tipo, setTipo] = useState(null)

    const retornaTipo = () => {

        if (tipo === "participante") {
            return <LoginParticipante/>
        } else if (tipo === "empresa") {
            return <LoginEmpresa/>
        } else if (tipo === null) {
            return <AlunoInstituicao tela='login' TipoEscolhido={setTipo}/>
        }
    }
    
    return (
        <>
            <main className="main-pagcadastro">
                <section className='section-pagcadastro'>
                    <Arvore/>
                    {retornaTipo()}
                </section>
            </main>
        </>
    )
}

export default PagLogin;
import '../components/login-cadastro/pagcadastro.css'
import { useState } from 'react';
import AlunoInstituicao from "../components/login-cadastro/AlunoInstituicao";
import CadastroParticipante from "../components/login-cadastro/CadastroParticipante";
import CadastroEmpresa from '../components/login-cadastro/CadastroEmpresa';
import Arvore from '../components/login-cadastro/Arvore';

function PagCadastro() {
    
    const [tipo, setTipo] = useState(null)

    const retornaTipo = () => {

        if (tipo === "participante") {
            return <CadastroParticipante/>
        } else if (tipo === "empresa") {
            return <CadastroEmpresa/>
        } else if (tipo === null) {
            return <AlunoInstituicao tela='cadastro' TipoEscolhido={setTipo}/>
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

export default PagCadastro;
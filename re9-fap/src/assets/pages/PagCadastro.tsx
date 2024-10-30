import '../components/login-cadastro/pagcadastro.css'
import AlunoInstituicao from "../components/login-cadastro/AlunoInstituicao";
import CadastroAluno from "../components/login-cadastro/CadastroAluno";

function PagCadastro() {
    
    
    return (
        <>
            <main className="main-pagcadastro">
                <AlunoInstituicao/>
                <CadastroAluno/>
            </main>
        </>
    )
}

export default PagCadastro;
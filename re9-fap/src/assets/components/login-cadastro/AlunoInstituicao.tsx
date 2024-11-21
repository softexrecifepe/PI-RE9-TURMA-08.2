import "./AlunoInstituicao.css"
import logotipo from "../../img/logocompleta.png"



function AlunoInstituicao({TipoEscolhido, tela}: {TipoEscolhido:any, tela:string}) {


    return(
        <>
            <section className="aluno-instituicao-section">
                <img className="logotipo-aluno-instituicao" src={logotipo} alt="renove logo" />
                <h2 className="chamada-aluno-instituicao-seletor">
                    Selecione abaixo que tipo de {tela == "cadastro"? "cadastro": "login"} que deseja realizar
                </h2>

                    <div className="container-botoes-seletor">
                        <button onClick={() => TipoEscolhido('empresa')} className="primary-button">Empresa</button>
                        <button onClick={() => TipoEscolhido('participante')} className="primary-button">Participante</button>
                    </div>
            </section>
        </>
    )
}

export default AlunoInstituicao;
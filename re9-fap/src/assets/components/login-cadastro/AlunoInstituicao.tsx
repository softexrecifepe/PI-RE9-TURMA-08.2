import "./AlunoInstituicao.css"
import logotipo from "../../img/logocompleta.png"
import Button from "../buttons/Buttons";

function AlunoInstituicao() {

    const tela:string = "cadastro"

    return(
        <>
            <section className="aluno-instituicao-section">
                <img className="logotipo-aluno-instituicao" src={logotipo} alt="renove logo" />
                <h2 className="chamada-aluno-instituicao-seletor">
                    Selecione abaixo que tipo de {tela == "cadastro"? "cadastro": "login"} deseja realizar
                </h2>

                    <div className="container-botoes-seletor">
                        <Button stylebutton="primary-button" text="Empresa"/>
                        <Button stylebutton="primary-button" text="Participante"/>
                    </div>
            </section>
        </>
    )
}

export default AlunoInstituicao;
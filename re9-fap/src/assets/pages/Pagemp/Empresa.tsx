// import "./empresa.css"
import imgprojeto from "./image/projetos/gerenciamento-de-projetos.png"
import PerfilLateral from "../../components/perfil/Perfil"; 
import Projetosemp from "../../components/conteudos/Projetosemp";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <PerfilLateral />
      <Projetosemp />
    </div>
  );
};

export default App;

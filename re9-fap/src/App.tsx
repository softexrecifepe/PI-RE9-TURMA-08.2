import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import PagCadastro from './assets/pages/PagCadastro'
import PagLogin from './assets/pages/PagLogin'
import PagCadProjetos from './assets/pages/PagCadProjetos'
import './App.css';
import Empresa from './assets/components/telaEmpresa/Empresa';
import Usuario from './assets/components/telaUsuario/Usuario'

function App() {

  return (
    <>
    <div>
      <Usuario/>
    </div>


      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cadastro' element={<PagCadastro/>}/>
          <Route path='/login' element={<PagLogin/>}/>
          <Route path='/cadprojeto' element={<PagCadProjetos/>}/>
          <Route path='/pageuser' element={<Usuario/>}/>
          <Route path='/pagempresa' element={<Empresa/>}/>
        </Routes>
      </Router> 
    </>
  )
}

export default App;

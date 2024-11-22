import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import PagCadastro from './assets/pages/PagCadastro'
import PagLogin from './assets/pages/PagLogin'
import PagCadProjetos from './assets/pages/PagCadProjetos'
import './App.css';
import Empresa from './assets/pages/Pagemp/Empresa';
import Usuario from './assets/pages/Paguser/Usuario'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cadastro' element={<PagCadastro/>}/>
          <Route path='/login' element={<PagLogin/>}/>
          <Route path='/cadprojeto' element={<PagCadProjetos/>}/>
          <Route path='/paguser' element={<Usuario/>}/>
          <Route path='/pagempresa' element={<Empresa/>}/>
        </Routes>
      </Router> 
    </>
  )
}

export default App;

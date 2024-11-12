import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import PagCadastro from './assets/pages/PagCadastro'
import PagLogin from './assets/pages/PagLogin'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cadastro' element={<PagCadastro/>}/>
          <Route path='/login' element={<PagLogin/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

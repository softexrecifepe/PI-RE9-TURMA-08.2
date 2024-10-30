import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import PagCadastro from './assets/pages/PagCadastro'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cadastro' element={<PagCadastro/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

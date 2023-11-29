import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Questoes from '../pages/Questoes'
import PostQuestoes from '../pages/PostQuestoes'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Questoes/>}></Route>
        <Route path='/criar' element={<PostQuestoes/>}></Route>
      </Routes>
      </BrowserRouter>    
    </>
  )
}

export default App

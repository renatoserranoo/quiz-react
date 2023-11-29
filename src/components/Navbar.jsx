import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <Link to='/' className='link'>Responder Questões </Link>
        <Link to='/criar' className='link'>Criar Questões</Link>
    </nav>
  )
}

export default Navbar
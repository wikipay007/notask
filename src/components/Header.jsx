import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

function Header() {
  const navigate = useNavigate(); // Use useNavigate para obter a função de navegação
  return (
    <header>
      <div className="imgLogo">
        <img src="./img/notaskLogoBranco.png" alt="logoImg" />
      </div>
      <div className="links">
        <a href="#">O projeto</a>
        <a href="#">Funcionalidades</a>
        <a href="#">Novidades</a>
      </div>
      <div className="buttons">
        <button className='login' onClick={() => navigate('/login')}>Entre</button> {/* Adicione o onClick para redirecionar */}
        <button className='cadastro'>Cadastre-se <GoArrowRight /> </button>
      </div>

    </header>
  )
}

export default Header
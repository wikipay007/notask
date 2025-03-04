import React from 'react'
import { GoArrowRight } from "react-icons/go";

function Header() {
  return (
    <header>
        <div className="imgLogo">
        <img src=".\public\img\chronotask - logo-10.png" alt="logoImg" />
        </div>
        <div className="links">
            <a href="#">O projeto</a>
            <a href="#">Funcionalidades</a>
            <a href="#">Novidades</a>
        </div>
        <div className="buttons">
            <button className='login'>Entre</button>
            <button className='cadastro' >Cadastre-se <GoArrowRight/> </button>
        </div>
        
    </header>
  )
}

export default Header
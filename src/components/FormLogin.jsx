import React from 'react'
import Input from "../components/input.jsx"
import ButtonLogin from "../components/ButtonLogin.jsx"
import '../styles/formLogin.css'

function FormLogin() {
    return (
        <form action="#" method="post">
            <div>
                <h1>Bem Vindo!</h1>
                <p>Entre com seu login e senha</p>
            </div>

            <div className='inputs'>
                <Input
                    label="Email"
                    placeholder="Digite seu email"
                    id="email" />

                <Input
                    label="Senha"
                    placeholder="Digite sua senha"
                    id="senha" />
            </div>
            <div>
                <a href="#">Esqueceu a senha?</a>
            </div>
            <ButtonLogin type="submit" value="Entrar" />
        </form>
    )
}

export default FormLogin

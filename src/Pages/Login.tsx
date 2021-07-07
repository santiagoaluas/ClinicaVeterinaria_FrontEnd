import React from 'react'

const Login = () => {
    const prueba = (value : string) =>{
        return value + " aqui si entro otra vez"
    }
    return (
        <div>
            {
                prueba("hola mundo")
            }
        </div>
    )
}

export default Login
